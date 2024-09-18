import { useContext, useState } from "react"
import "./window.css"
import myContext from "../Context/Context"

export default function Window(props: { windowType: any, keyNumber: number }) {
  const { renderWindow, setNewWindow } = useContext(myContext)
  const [position, setPosition] = useState({ x: 450, y: 300 })

  const redefinePosition = (pageX: number, pageY: number) => {
    if (pageX || pageY > 0) {
      setPosition({
        x: (pageX),
        y: pageY
      })
    }
  }

  const deleteWindow = () => {
    setNewWindow(renderWindow.filter((item: any) => item.identifier != props.keyNumber))
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
          <button onClick={ () => deleteWindow() }>X</button>
      </header>
    </section>
  )
}
