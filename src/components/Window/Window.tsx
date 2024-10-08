import { useContext, useState } from "react"
import "./window.css"
import myContext from "../Context/Context"
import ProjectsWindow from "../Projects/ProjectsWindow"
import Stacks from "../Stacks/Stacks"
import Contacts from "../Contacts/Contacts"
import Certificates from "../Certificates/Certificates"

export default function Window(props: { windowType: string, keyNumber: number }) {
  const { renderWindow, setNewWindow } = useContext(myContext)
  const [position, setPosition] = useState({ x: 100, y: 100 })

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

  const setWindowType = (windowType: string) => {
    switch (windowType) {
      case "Projetos":
        return (<ProjectsWindow/>)
      case "Tecnologias":
        return (<Stacks/>)
      case "Contatos":
        return (<Contacts/>)
      case "Certificados":
        return (<Certificates/>)
      default:
        break;
    }
  }

  return(
    <section
      className="window"
      onResize={ (e) => console.log(e) }
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
      <header
        className="windowHeader"
        onDrag={ ({clientX, clientY}) => redefinePosition(clientX, clientY) }
        draggable
        >
          <p className="windowName">{ props.windowType }</p>
          <button onClick={ () => deleteWindow() } className="closeBtn">X</button>
      </header>
      {
        setWindowType(props.windowType)
      }
    </section>
  )
}
