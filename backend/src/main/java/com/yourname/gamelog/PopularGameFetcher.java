package com.yourname.gamelog;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

@RestController
@RequestMapping("/popular")
public class PopularGameFetcher {

    private final RestClient igdb;
    private final String clientId;
    private final String accessToken;

    public PopularGameFetcher(
            @Value("${igdb.client-id}") String clientId,
            @Value("${igdb.access-token}") String accessToken) {
        this.igdb = RestClient.create("https://api.igdb.com/v4");
        this.clientId = clientId;
        this.accessToken = accessToken;
    }

    @GetMapping
    public String getPopularGame(@RequestParam long gameId) {
        return igdb.post()
                .uri("/popularity_primitives")
                .header("Client-ID", clientId)
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.TEXT_PLAIN)
                .body("fields game_id, value; "
                    + "where popularity_type = 1; "
                    + "sort value desc; "
                    + "limit 10;")
                .retrieve()
                .body(String.class);
    }

}