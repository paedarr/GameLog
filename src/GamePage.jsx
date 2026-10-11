import { useState, useEffect } from 'react'

function GamePage() {

const [games, setGames] = useState([])
const [error, setError] = useState('')

  useEffect(() => {
    fetch('http://localhost:8080/game_detail')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`)
        }
        return response.json()
      })
      .then(data => setGames(data))
      .catch(error => setError(error.message))
  }, [])

  
const cover_url = (imageId, size = "t_cover_big") =>
  imageId
    ? `https://images.igdb.com/igdb/image/upload/${size}/${imageId}.jpg`
    : "/placeholder.png";


    return (
        <div className="game-page">

            {error && <p>Error loading games: {error}</p>}

            <h1>Game Page: {games[0]?.game?.name}</h1>
            <img src={cover_url(games[0]?.game?.cover?.image_id)} alt={games[0]?.game?.name} />
        </div>
    );
}

export default GamePage;