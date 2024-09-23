import "./certificates.css"
import FrontEnd from "../../assets/certificados/Front-end.webp"
import BackEnd from "../../assets/certificados/Back-end.webp"
import Fundamentos from "../../assets/certificados/Fundamentos.webp"
import Ciencia from "../../assets/certificados/Ciencia.webp"
import fileAsset from "../../assets/fileIcon.png"
import { useState } from "react"

const certificados = [
  {
    name: "Front-End",
    image: FrontEnd,
    link: "https://www.credential.net/ea8042d9-283a-4b8c-8866-8e124b374486#gs.f20qj3"
  },
  {
    name: "Back-End",
    image: BackEnd,
    link: "https://www.credential.net/a849f7a6-25a1-45b4-bd21-2b2ed16126f2#gs.f20quk"
  },
  {
    name: "Fundamentos do Desenvolvimento Web",
    image: Fundamentos,
    link: "https://www.credential.net/3fac9a69-ebf2-4090-8fc4-d260aeed0d41#gs.f20qkv"
  },
  {
    name: "Ciência da Computação",
    image: Ciencia,
    link: "https://www.credential.net/7932e690-9451-4ba4-942e-f19028b99de9#gs.f20qly"
  },
]

export default function Certificates() {
  const [certificateDetail, setCertificateDetail] = useState(<h2 className="certificateDetailPlaceholder">Selecione para pré-visualizar um certificado.</h2>)
  return (
    <section className="certificates">
      <nav>
        {
          certificados.map((item, index) => {
            const {
              name,
              image,
              link,
            } = item;

            return(
              <div
                className="icon"
                key={index}
                onClick={ () => setCertificateDetail(
                  <div>
                    <img src={image} alt={name} className="certificatePreview"/>
                    <a href={link} target="blank">Ver certificado</a>
                  </div>
                )}
              >
                <img src={fileAsset} alt={name}/>
                <p>{name}</p>
              </div>
            )
          })
        }
      </nav>
      <div className="certificateDetails">
        {
          certificateDetail
        }
      </div>
    </section>
  )
}