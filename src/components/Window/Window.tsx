import { useState } from "react"
import "./window.css"

export default function Window(props: { windowType: any, deleteFunction: Function, keyNumber: number }) {
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
        onDrag={ ({clientX, clientY}) => redefinePosition(clientX, clientY) }
        draggable
        >
          <p>{ props.windowType }</p>
          <button onClick={ () => props.deleteFunction(props.keyNumber) }>X</button>
      </header>
    </section>
  )
}
