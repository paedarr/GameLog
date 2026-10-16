package com.yourname.gamelog;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestClient;

import org.springframework.http.MediaType;
import java.util.stream.Stream;
//import java.util.stream.Collectors;


@RestController
@RequestMapping("/featured")
public class FeaturedGameFetcher {

    private final RestClient igdb;
    private final String clientId;
    private final String accessToken;

    public FeaturedGameFetcher(
            @Value("${igdb.client-id}") String clientId,
            @Value("${igdb.access-token}") String accessToken) {
        this.igdb = RestClient.create("https://api.igdb.com/v4");
        this.clientId = clientId;
        this.accessToken = accessToken;
    }

    @GetMapping
    public String getFeatured() {

        String nameFilter = Stream.of("arc raiders", "gears of war: e-day", "grand theft auto vi")
        .map(t -> "name ~ \"" + t.replace("\"", "\\\"") + "\"")
        .collect(Collectors.joining(" | "));

        return igdb.post()
                .uri("/games")
                .header("Client-ID", clientId)
                .header("Authorization", "Bearer " + accessToken)
                .contentType(MediaType.TEXT_PLAIN)
                .body("fields id, name, cover.image_id, first_release_date; "
                    + "where (" + nameFilter + ") & cover != null; "
                    + "sort total_rating_count desc; "
                    + "limit 10;")
                .retrieve()
                .body(String.class);
    }

}