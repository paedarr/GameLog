package com.yourname.gamelog;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

// THIS PAGE IS BROKEN -> TO DO

@RestController
@RequestMapping("/game_detail")
public class GameDetailFetcher {
    private final RestClient igdb;
    private final String clientId;
    private final String accessToken;

    public GameDetailFetcher(
            @Value("${igdb.client-id}") String clientId,
            @Value("${igdb.access-token}") String accessToken) {
        this.igdb = RestClient.create("https://api.igdb.com/v4");
        this.clientId = clientId;
        this.accessToken = accessToken;
    }

    @GetMapping
    public String getGames() {

        // long now = Instant.now().getEpochSecond();
        // add more vars here so query can be less cluttered

        return igdb.post()
                .uri("/games")
                .header("Client-ID", clientId)
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.TEXT_PLAIN)
                .body("fields game.name, game.cover.image_id, human; ")
                .retrieve()
                .body(String.class);
    }
}