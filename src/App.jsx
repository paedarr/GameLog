import { useState, useEffect } from 'react'
import GamePage from './GamePage.jsx'
// import { Routes, Route } from "react-router-dom";

function App() {

  const [games, setGames] = useState([])
  const [error, setError] = useState('')
  const [selectedGame, setSelectedGame] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/games')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`)
        }
        return response.json()
      })
      .then(data => setGames(data))
      .catch(error => setError(error.message))
  }, [])

  // <------------------------------------------>

  const [popGames, setPopGames] = useState([])
  const [popError, setPopError] = useState('')
  const [selectedPopGame, setSelectedPopGame] = useState(null)


  useEffect(() => {
    fetch('http://localhost:8080/popular')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`)
        }
        return response.json()
      })
      .then(data => setPopGames(data))
      .catch(error => setPopError(error.message))
  }, [])


// <------------------------------------------>


  const [featGames, setFeatGames] = useState([])
  const [featError, setFeatError] = useState('')
  const [selectedFeatGame, setSelectedFeatGame] = useState(null)


  useEffect(() => {
    fetch('http://localhost:8080/featured')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`)
        }
        return response.json()
      })
      .then(data => setFeatGames(data))
      .catch(error => setFeatError(error.message))
  }, [])


// <------------------------------------------>
  
const cover_url = (imageId, size = "t_cover_big") =>
  imageId
    ? `https://images.igdb.com/igdb/image/upload/${size}/${imageId}.jpg`
    : "/placeholder.png";

if (selectedGame) {
  return (
    <GamePage
      game={selectedGame}
      onBack={() => setSelectedGame(null)}
    />
  )
}

if (selectedPopGame) {
  return (
    <GamePage
      game={selectedPopGame}
      onBack={() => setSelectedPopGame(null)}
    />
  )
}

if (selectedFeatGame) {
  return (
    <GamePage
      game={selectedFeatGame}
      onBack={() => setSelectedFeatGame(null)}
    />
  )
}

return (
    <div className="App">
      
      <div className = "home_page_container">

        <navbar className = "navbar text-amber-100">GameLog</navbar>

        <div className = "game_card_container_popular mt-3 mb-3">

          <p position = "relative" className="text-2xl font-bold text-white mb-2">Popular Games</p>
          <div className = "grid_card_align flex bg-black">
            <div className = "grid_card_align flex bg-black">
            {popError && <p>Error loading popular games: {popError}</p>}
            {popGames.map((release, index) => (
              <button
                type="button"
                className="little_card relative group text-left"
                key={release.game?.id ?? index}
                onClick={() => setSelectedPopGame(release.game)}
              >
                <img
                  src={cover_url(release.game?.cover?.image_id)}
                  alt={release.game?.name ?? 'Game cover'}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
                <p className="new_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {release.game?.name}
                </p>
              </button>
            ))}
          </div>
          </div>
        </div>

        <div className = "game_card_container_featured mb-3">
          <p position = "relative" className="text-2xl font-bold text-white mb-2">Featured Games</p>
          <div className = "grid_card_align flex bg-black">
              {featError && <p>Error loading featured games: {featError}</p>}
              {featGames.map((game, index) => (
              <button
                type="button"
                className="big_card relative group text-left"
                key={game.id ?? index}
                onClick={() => setSelectedFeatGame(game)}
              >
                <img
                  src={cover_url(game.cover?.image_id, 't_1080p')}
                  alt={game.name ?? 'Game cover'}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
                <p className="new_game_title absolute bottom-0 left-0 text-4xl z-10 text-white opacity-100 bg-black/50 p-2 rounded-tr-sm rounded-bl-sm">
                  {game.name}
                </p>
              </button>
            ))}
          </div>
        </div>

        <div className = "game_card_container_new">

          <p position = "relative" className="text-2xl font-bold text-white mb-2">New Games</p>

          <div className = "grid_card_align flex bg-black">
            {error && <p>Error loading games: {error}</p>}
            {games.map((release, index) => (
              <button
                type="button"
                className="little_card relative group text-left"
                key={release.game?.id ?? index}
                onClick={() => setSelectedGame(release.game)}
              >
                <img
                  src={cover_url(release.game?.cover?.image_id)}
                  alt={release.game?.name ?? 'Game cover'}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
                <p className="new_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  {release.game?.name}
                </p>
              </button>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}

export default App
