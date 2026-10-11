import { useState, useEffect } from 'react'
import GamePage from './GamePage.jsx'
import { Routes, Route } from "react-router-dom";

function App() {

  const [games, setGames] = useState([])
  const [error, setError] = useState('')

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


  return (
    <div className="App">
      
      <div className = "home_page_container">

        <navbar className = "navbar text-amber-100">this is the navbar</navbar>

        <div className = "game_card_container_new">
          <div className = "grid_card_align flex bg-emerald-300">
            <div className = "little_card relative group" onClick = {GamePage}>
              {error && <p>Error loading games: {error}</p>}

              <img src = {cover_url(games[0]?.game?.cover?.image_id)} alt = {games[0]?.game?.name} className = "w-full h-full object-cover rounded-lg"/>
              <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
              <p className = "new_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">{games[0]?.game?.name}</p>

            </div>
            <div className = "little_card relative group" onClick={() => console.log('Clicked on game:', games[1]?.game?.name)}>
              {error && <p>Error loading games: {error}</p>}

              <img src = {cover_url(games[1]?.game?.cover?.image_id)} alt = {games[1]?.game?.name} className = "w-full h-full object-cover rounded-lg"/>
              <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
              <p className = "new_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">{games[1]?.game?.name}</p>

            </div>
            <div className = "little_card relative group">
              {error && <p>Error loading games: {error}</p>}

              <img src = {cover_url(games[2]?.game?.cover?.image_id)} alt = {games[2]?.game?.name} className = "w-full h-full object-cover rounded-lg"/>
              <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
              <p className = "new_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">{games[2]?.game?.name}</p>

            </div>
            <div className = "little_card relative group">
              {error && <p>Error loading games: {error}</p>}

              <img src = {cover_url(games[3]?.game?.cover?.image_id)} alt = {games[3]?.game?.name} className = "w-full h-full object-cover rounded-lg"/>
              <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
              <p className = "new_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">{games[3]?.game?.name}</p>

            </div>
            <div className = "little_card relative group">
              {error && <p>Error loading games: {error}</p>}

              <img src = {cover_url(games[4]?.game?.cover?.image_id)} alt = {games[4]?.game?.name} className = "w-full h-full object-cover rounded-lg"/>
              <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
              <p className = "new_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">{games[4]?.game?.name}</p>

            </div>
            <div className = "little_card relative group">
              {error && <p>Error loading games: {error}</p>}

              <img src = {cover_url(games[5]?.game?.cover?.image_id)} alt = {games[5]?.game?.name} className = "w-full h-full object-cover rounded-lg"/>
              <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
              <p className = "new_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">{games[5]?.game?.name}</p>

            </div>
            <div className = "little_card relative group">
              {error && <p>Error loading games: {error}</p>}

              <img src = {cover_url(games[6]?.game?.cover?.image_id)} alt = {games[6]?.game?.name} className = "w-full h-full object-cover rounded-lg"/>
              <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
              <p className = "new_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">{games[6]?.game?.name}</p>

            </div>
            <div className = "little_card relative group">
              {error && <p>Error loading games: {error}</p>}

              <img src = {cover_url(games[7]?.game?.cover?.image_id)} alt = {games[7]?.game?.name} className = "w-full h-full object-cover rounded-lg"/>
              <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
              <p className = "new_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">{games[7]?.game?.name}</p>

            </div>
            <div className = "little_card relative group">
              {error && <p>Error loading games: {error}</p>}

              <img src = {cover_url(games[8]?.game?.cover?.image_id)} alt = {games[8]?.game?.name} className = "w-full h-full object-cover rounded-lg"/>
              <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
              <p className = "new_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">{games[8]?.game?.name}</p>

            </div>
            <div className = "little_card relative group">
              {error && <p>Error loading games: {error}</p>}

              <img src = {cover_url(games[9]?.game?.cover?.image_id)} alt = {games[9]?.game?.name} className = "w-full h-full object-cover rounded-lg"/>
              <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
              <p className = "new_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">{games[9]?.game?.name}</p>

            </div>
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

      </div>

    </div>
  )
}

export default App
