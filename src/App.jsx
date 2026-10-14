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

return (
    <div className="App">
      
      <div className = "home_page_container">

        <navbar className = "navbar text-amber-100">GameLog</navbar>

        <div className = "game_card_container_popular">
          <div className = "grid_card_align flex bg-emerald-300">
            <div className = "little_card relative group">
               <img src = "public/thumbnails/minecraft_minithumb.jpg" alt = "minecraft thumbnail" className = "w-full h-full object-cover rounded-lg"/>
               <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
               <p className = "popular_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">Minecraft</p>
            </div>
            <div className = "little_card">this is a little card</div>
            <div className = "little_card">this is a little card</div>
            <div className = "little_card">this is a little card</div>
            <div className = "little_card">this is a little card</div>
            <div className = "little_card">this is a little card</div>
            <div className = "little_card">this is a little card</div>
            <div className = "little_card">this is a little card</div>
            <div className = "little_card">this is a little card</div>
            <div className = "little_card">this is a little card</div>
          </div>
        </div>

        <div className = "game_card_container_featured">
          <div className = "grid_card_align flex bg-emerald-300">
            <div className = "big_card relative group">
              <img src = "public/thumbnails/gears_of_war_e_day_landscape_thumb.jpg" alt = "gears of war thumbnail" className = "w-full h-full object-cover rounded-lg"/>
              <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
              <p className = "featured_game_title absolute bottom-3 left-3 z-20 text-xl text-white opacity-0 transition-opacity group-hover:opacity-100">Gears of War: E Day</p>
            </div>
            <div className = "big_card">this is a big card</div>
            <div className = "big_card">this is a big card</div>
          </div>
        </div>

        <div className = "game_card_container_new">
          <div className = "grid_card_align flex bg-emerald-300">
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
