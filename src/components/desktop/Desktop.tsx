import Window from "../Window/Window.tsx"
import "./desktop.css"

export default function Desktop() {
  return(
    <section className="desktopScreen">
      <main className="workArea">
        <Window />
      </main>
      <footer className="taskBar">

      </footer>
    </section>
  )
}
