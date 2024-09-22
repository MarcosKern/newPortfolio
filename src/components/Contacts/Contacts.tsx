import "./contacts.css"
import Github from "../../assets/contactsIcons/icons8-github.svg"
import Gmail from "../../assets/contactsIcons/icons8-gmail.svg"
import Whatsapp from "../../assets/contactsIcons/icons8-whatsapp.svg"
import Linkedin from "../../assets/contactsIcons/icons8-linkedin.svg"

export default function Contacts() {
  
  return(
    <div className="contacts">
      <a href="https://github.com/MarcosKern" className="icon" target="blank">
        <img src={Github} alt="Icone Github" style={{ filter: "invert()" }}/>
        <p>Github</p>
      </a>
      <a
        href="mailto:vkg.marcos@gmail.com"
        className="icon"
        onClick={ () => {
          navigator.clipboard.writeText("vkg.marcos@gmail.com")
          window.alert("Email copiado!")
        } }  
      >
        <img src={Gmail} alt="Icone Gmail" />
        <p>Email</p>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=5551989475225&text=&type=phone_number&app_absent=0" className="icon" target="blank">
        <img src={Whatsapp} alt="Icone Whatsapp" />
        <p>WhatsApp</p>
      </a>
      <a href="https://www.linkedin.com/in/marcoskern/" className="icon" target="blank">
        <img src={Linkedin} alt="Icone Linkedin" />
        <p>Linkedin</p>
      </a>
    </div>
  )
}