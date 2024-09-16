import { useState } from "react"
import "./window.css"

export default function Window() {
  const [position, setPosition] = useState({ x: 450, y: 300 })

  const redefinePosition = (pageX: number, pageY: number) => {
    if (pageX || pageY > 0) {
      setPosition({
        x: (pageX),
        y: pageY
      })
    }
  }

  return(
    <section
      className="Window"
      onResize={ (e) => console.log(e) }
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
      <header
        className="windowHeader"
        onDrag={ ({pageX, pageY}) => redefinePosition(pageX, pageY) }
        draggable
        >

      </header>
      <section>
        <div className="projects">

        </div>
        <div className="projectDetails"> 

        </div>
      </section>
      <footer>

      </footer>
    </section>
  )
}
