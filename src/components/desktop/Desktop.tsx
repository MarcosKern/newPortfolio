import { ReactElement, useState } from "react"
import Window from "../Window/Window.tsx"
import "./desktop.css"
import Taskbar from "../Taskbar/Taskbar.tsx"

export default function Desktop() {
  const [ renderWindow, setNewWindow ] = useState(Array<{
    identifier: number,
    render: ReactElement
  }>)
  const [ windowKey, setWindowKey ] = useState(0)

  const newWindow = (type: string, key: number) => {
    const newWindow = renderWindow.concat({
      identifier: key,
      render: <Window
        windowType={`${type}${key}`}
        key={windowKey}
        deleteFunction={ () => deleteWindow(key)}
        keyNumber={key} />
      })

    setNewWindow(newWindow)
    setWindowKey(windowKey + 1)
  }

  const deleteWindow = (key: number) => {
    const del = renderWindow.filter((item) => item.identifier != key)
    console.log(renderWindow.filter((item) => item.identifier != key))
    setNewWindow(del)
  }

  return(
    <section className="desktopScreen">
      {
        renderWindow && renderWindow.map((item) => item.render)
      }
      <main className="workArea">
        <div
        className="icon"
        onDoubleClick={ () => newWindow("Projetos", windowKey) }>
          <img src="" alt="" />
          <p>open</p>
        </div>
      </main>
      <Taskbar />
    </section>
  )
}
