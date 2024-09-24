import { useContext, useState } from "react"
import Window from "../components/Window/Window.tsx"
import "./desktop.css"
import Taskbar from "../components/Taskbar/Taskbar.tsx"
import myContext from "../components/Context/Context.tsx"
import folderAsset from "../assets/folderIcon.png";

function Desktop() {
  const { renderWindow, setNewWindow } = useContext(myContext)
  const [ windowKey, setWindowKey ] = useState(0)

  const newWindow = (type: string, key: number) => {
    const settingNewWindow = renderWindow.concat({
      identifier: key,
      render: <Window
        windowType={type}
        key={windowKey}
        keyNumber={key} />
      })

    setNewWindow(settingNewWindow)
    setWindowKey(windowKey + 1)
  }

  return(
    <section className="desktopScreen">
      {
        renderWindow && renderWindow.map((item: any) => item.render)
      }
      <main className="workArea">
        <div
        className="icon"
        onDoubleClick={ () => newWindow("Projetos", windowKey) }
        >
          <img src={folderAsset} alt="" />
          <p>Projetos</p>
        </div>
        <div
        className="icon"
        onDoubleClick={ () => newWindow("Tecnologias", windowKey) }
        >
          <img src={folderAsset} alt="" />
          <p>Tecnologias</p>
        </div>
        <div
        className="icon"
        onDoubleClick={ () => newWindow("Contatos", windowKey) }>
          <img src={folderAsset} alt="" />
          <p>Contatos</p>
        </div>
        <div
        className="icon"
        onDoubleClick={ () => newWindow("Certificados", windowKey) }>
          <img src={folderAsset} alt="" />
          <p>Certificados</p>
        </div>
      </main>
      <Taskbar />
    </section>
  )
}

export default Desktop;