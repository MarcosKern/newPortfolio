import "./stacks.css"
import HTML from "../../assets/stacksIcons/icons8-html5.svg"
import CSS from "../../assets/stacksIcons/icons8-css3.svg"
import JavaScript from "../../assets/stacksIcons/icons8-javascript.svg"
import TypeScript from "../../assets/stacksIcons/icons8-typescript.svg"
import Git from "../../assets/stacksIcons/icons8-git.svg"
import ReactIcon from "../../assets/stacksIcons/icons8-react.svg"

export default function Stacks() {
  return(
    <div className="stacks">
      <a href="https://www.w3schools.com/html/" className="icon" target="blank">
        <img src={HTML} alt="HTML5 icon" />
        <p>index.html</p>
      </a>
      <a href="https://www.w3schools.com/css/default.asp" className="icon" target="blank">
        <img src={CSS} alt="CSS3 icon" />
        <p>style.css</p>
      </a>
      <a href="https://www.w3schools.com/js/default.asp" className="icon" target="blank">
        <img src={JavaScript} alt="JavaScript icon" />
        <p>script.js</p>
      </a>
      <a href="https://www.typescriptlang.org/" className="icon" target="blank">
        <img src={TypeScript} alt="TypeScript icon" />
        <p>script.ts</p>
      </a>
      <a href="https://git-scm.com/" className="icon" target="blank">
        <img src={Git} alt="Git icon" />
        <p>.gitgnore</p>
      </a>
      <a href="https://react.dev/" className="icon" target="blank">
        <img src={ReactIcon} alt="React icon" />
        <p>component.jsx</p>
      </a>
    </div>
  )
}