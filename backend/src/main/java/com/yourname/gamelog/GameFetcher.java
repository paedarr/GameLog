package com.yourname.gamelog;

import java.time.Instant;
import java.util.HashSet;
import java.util.Set;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.json.JsonMapper;
import tools.jackson.databind.node.ArrayNode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;


import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.http.MediaType;

@Configuration
class WebConfig implements WebMvcConfigurer {

    @Value("${app.cors.allowed-origin}")
    private String allowedOrigin;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins(allowedOrigin)
                .allowedMethods("GET", "POST", "PUT", "DELETE");
    }
}

@RestController
@RequestMapping("/games")
public class GameFetcher {

    private static final int RELEASE_PAGE_SIZE = 500;
    private static final int MAX_RELEASE_OFFSET = 9_500;

    private final RestClient igdb;
    private final String clientId;
    private final String accessToken;
    private final JsonMapper jsonMapper = JsonMapper.builder().build();

    public GameFetcher(
            @Value("${igdb.client-id}") String clientId,
            @Value("${igdb.access-token}") String accessToken) {
        this.igdb = RestClient.create("https://api.igdb.com/v4");
        this.clientId = clientId;
        this.accessToken = accessToken;
    }

    @GetMapping
    public String getGames() {

        long now = Instant.now().getEpochSecond();

        ArrayNode uniqueReleases = jsonMapper.createArrayNode();
        Set<Long> seenGameIds = new HashSet<>();

        for (int offset = 0;
                offset <= MAX_RELEASE_OFFSET && uniqueReleases.size() < 10;
                offset += RELEASE_PAGE_SIZE) {
            String response = igdb.post()
                    .uri("/release_dates")
                    .header("Client-ID", clientId)
                    .header("Authorization", "Bearer " + accessToken)
                    .contentType(MediaType.TEXT_PLAIN)
                    .body("fields game.id, game.name, game.cover.image_id, human; "
                        + "where date != null & date <= " + now + " & game != null; "
                        + "sort date desc; "
                        + "limit " + RELEASE_PAGE_SIZE + "; "
                        + "offset " + offset + ";")
                    .retrieve()
                    .body(String.class);
            JsonNode releases = jsonMapper.readTree(response);

            for (JsonNode release : releases) {
                JsonNode gameId = release.path("game").path("id");
                if (gameId.isIntegralNumber() && seenGameIds.add(gameId.longValue())) {
                    uniqueReleases.add(release);
                    if (uniqueReleases.size() == 10) {
                        break;
                    }
                }
            }

            if (releases.size() < RELEASE_PAGE_SIZE) {
                break;
            }
        }

        return jsonMapper.writeValueAsString(uniqueReleases);
    }

}