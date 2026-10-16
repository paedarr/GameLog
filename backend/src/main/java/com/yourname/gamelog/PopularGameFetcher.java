package com.yourname.gamelog;

import java.util.LinkedHashSet;
import java.util.Map;
import java.util.stream.Collectors;

import tools.jackson.databind.JsonNode;
import tools.jackson.databind.json.JsonMapper;
import tools.jackson.databind.node.ArrayNode;
import tools.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

@RestController
@RequestMapping("/popular")
public class PopularGameFetcher {

    private final RestClient igdb;
    private final String clientId;
    private final String accessToken;
    private final JsonMapper jsonMapper = JsonMapper.builder().build();

    public PopularGameFetcher(
            @Value("${igdb.client-id}") String clientId,
            @Value("${igdb.access-token}") String accessToken) {
        this.igdb = RestClient.create("https://api.igdb.com/v4");
        this.clientId = clientId;
        this.accessToken = accessToken;
    }

    @GetMapping
    public String getPopularGame() {
        String popularityResponse = igdb.post()
                .uri("/popularity_primitives")
                .header("Client-ID", clientId)
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.TEXT_PLAIN)
                .body("fields game_id, value; "
                    + "where popularity_type = 3; "
                    + "sort value desc; "
                    + "limit 10;")
                .retrieve()
                .body(String.class);

        JsonNode popularity = jsonMapper.readTree(popularityResponse);
        LinkedHashSet<Long> gameIds = new LinkedHashSet<>();
        for (JsonNode record : popularity) {
            JsonNode gameId = record.get("game_id");
            if (gameId != null && gameId.isIntegralNumber()) {
                gameIds.add(gameId.longValue());
            }
        }

        if (gameIds.isEmpty()) {
            return "[]";
        }

        String ids = gameIds.stream()
                .map(String::valueOf)
                .collect(Collectors.joining(","));
        String gamesResponse = igdb.post()
                .uri("/games")
                .header("Client-ID", clientId)
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.TEXT_PLAIN)
                .body("fields id, name, cover.image_id; "
                    + "where id = (" + ids + "); "
                    + "limit 10;")
                .retrieve()
                .body(String.class);

        Map<Long, JsonNode> gamesById = jsonMapper.readTree(gamesResponse).valueStream()
                .filter(game -> game.has("id") && game.get("id").isIntegralNumber())
                .collect(Collectors.toMap(game -> game.get("id").longValue(), game -> game));

        ArrayNode result = jsonMapper.createArrayNode();
        for (Long gameId : gameIds) {
            JsonNode game = gamesById.get(gameId);
            if (game != null) {
                ObjectNode popularGame = result.addObject();
                popularGame.set("game", game);
            }
        }
        return jsonMapper.writeValueAsString(result);
    }

}