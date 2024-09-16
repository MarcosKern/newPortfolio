import { useState } from "react"
import Window from "../Window/Window.tsx"
import "./desktop.css"
import Taskbar from "../Taskbar/Taskbar.tsx"


export default function Desktop() {
  const [renderWindow, setNewWindow] = useState([{}])

  const createNewWindow = (windowType: string) => {

    const newWindow = [
      ...renderWindow,
      { render: <Window/> }
    ]

    setNewWindow(newWindow)
  }

  return(
    <section className="desktopScreen">
      <main className="workArea">
        <div
        className="icon"
        onDoubleClick={ () => createNewWindow('projects') }>
          <img src="" alt="" />
          <p>open</p>
        </div>
        {
          renderWindow.map((item) => item.render)
        }
      </main>
      <Taskbar />
    </section>
  )
}
