import { useState } from "react"
import Window from "../Window/Window.tsx"
import "./desktop.css"
import Taskbar from "../Taskbar/Taskbar.tsx"

export default function Desktop() {

  return(
    <section className="desktopScreen">
      <main className="workArea">
        <div
        className="icon"
        onClick={ () => console.log()}
        onDoubleClick={ () => console.log("em desenvolvimento") }>
          <img src="" alt="" />
          <p>open</p>
        </div>
      </main>
      <Taskbar />
    </section>
  )
}
