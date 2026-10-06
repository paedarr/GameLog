// import { useState } from 'react'
function App() {

  return (
    <div className="App">
      
      <div className = "home_page_container">

        <navbar className = "navbar text-amber-100">this is the navbar</navbar>

        <div className = "game_card_container_new">
          <div className = "grid_card_align flex bg-emerald-300">
            <div className = "little_card">
               <img src = "public/thumbnails/control_resonant_minithumb.jpg" alt = "control resonant thumbnail" className = "w-full h-full object-cover rounded-lg"/>
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
