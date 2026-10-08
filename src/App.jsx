// import { useState } from 'react'
function App() {

  return (
    <div className="App">
      
      <div className = "home_page_container">

        <navbar className = "navbar text-amber-100">this is the navbar</navbar>

        <div className = "game_card_container_new">
          <div className = "grid_card_align flex bg-emerald-300">
            <div className = "little_card relative group">
               <p className = "new_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">CONTROL RESONANT</p>
               <img src = "public/thumbnails/control_resonant_minithumb.jpg" alt = "control resonant thumbnail" className = "w-full h-full object-cover rounded-lg"/>
               <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
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
              <p className = "featured_game_title absolute bottom-3 left-3 z-20 text-xl text-white opacity-0 transition-opacity group-hover:opacity-100">Gears of War: E Day</p>
              <img src = "public/thumbnails/gears_of_war_e_day_landscape_thumb.jpg" alt = "gears of war thumbnail" className = "w-full h-full object-cover rounded-lg"/>
              <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
            </div>
            <div className = "big_card">this is a big card</div>
            <div className = "big_card">this is a big card</div>
          </div>
        </div>

        <div className = "game_card_container_popular">
          <div className = "grid_card_align flex bg-emerald-300">
            <div className = "little_card relative group">
               <p className = "popular_game_title absolute bottom-3 left-3 text-xl z-10 text-white opacity-0 transition-opacity group-hover:opacity-100">Minecraft</p>
               <img src = "public/thumbnails/minecraft_minithumb.jpg" alt = "minecraft thumbnail" className = "w-full h-full object-cover rounded-lg"/>
               <div aria-hidden="true" className = "pointer-events-none absolute inset-0 z-10 rounded-lg bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75)_100%)] opacity-0 transition-opacity group-hover:opacity-100"></div>
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
