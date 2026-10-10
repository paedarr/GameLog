# POST and GET methods w/ IGDB interface

There are two steps you must complete to grab data from IGDB using Spring Boot:

1. Authenticate the token with Twitch Dev
2. Access IGDB game endpoint

# Via GameFetcher.java

In the backend folder, run the following lines in order:

```
export IGDB_CLIENT_ID='your-client-id'
```

then get the access token

```
curl -X POST 'https://id.twitch.tv/oauth2/token' -d 'client_id=YOUR_CLIENT_ID' -d 'client_secret=YOUR_CLIENT_SECRET' -d 'grant_type=client_credentials'
```

then

```
export IGDB_ACCESS_TOKEN='your-access-token'
```

then run the program

```
./mvnw spring-boot:run
```

finally, we can call our method 

```
curl http://localhost:8080/games
```

> When the localhost details change, alter the pathing

# Via Terminal:

## Authenticate Token w/ Twitch Dev

To first make a call to the twitch authentication to get the access_token (which does expire), make this call in a terminal window using the **curl** syntax:

```
curl -X POST 'https://id.twitch.tv/oauth2/token' -d 'client_id=YOUR_CLIENT_ID' -d 'client_secret=YOUR_CLIENT_SECRET' -d 'grant_type=client_credentials'
```

This will return something like:

```
{"access_token":"YOUR_TOKEN","expires_in":5195838,"token_type":"bearer"}
```

Copy the **access_token** and move to the next step.

## Access IGDB Game Endpoint

Using the **access_token**, in your same terminal window, put the following command in to retrieve the 10 first released games:

```
curl -X POST 'https://api.igdb.com/v4/games' -H 'Client-ID: YOUR_CLIENT_ID' -H 'Authorization: Bearer ACCESS_TOKEN' -H 'Content-Type: text/plain' --data 'fields name, first_release_date; limit 10;'
```

This will return a query in IGDB's query language, which is **not** JSON formatted. 

> To change the type of information requested+returned, just changed the lines after the `--data` line. For a full reference to what you can call with, go to:
https://api-docs.igdb.com/#examples