import { useEffect, useState } from "react";
import "./projectsWindow.css"
import callFetch from "../../services/callFetch";
import { PieChart } from "react-minimal-pie-chart";
import fileIcon from "../../assets/fileIcon.png"

export default function ProjectsWindow() {
  const [ getGithubApi, setGithubApi ] = useState(Array<any>)
  const [ currentRepo, setCurrentRepo ] = useState(<h2 className="projectDetailPlaceholder">Selecione um projeto para ver mais informações.</h2>)

  useEffect(() => {
    const url = 'https://api.github.com/users/MarcosKern/repos';

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setGithubApi(data)
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, [])

  const getRepo = async (id: number) => {
    const response = getGithubApi.find((item) => item.id == id)
    const languages = await callFetch(response.languages_url)
    const languagesArray = Object.entries(languages)
    const chartArray: Array<{ title: string, value: number, color: string }> = languagesArray
      .map((language) => {return({ title: language[0], value: Number(language[1]), color: `var(--${language[0]})`}) })
    console.log(chartArray)
    setCurrentRepo(
      <div className="showDetails">
        <h2 className="projectName">{response.name.replaceAll("-", " ")}</h2>
        <fieldset>
          <legend>Tecnologias utilizadas</legend>
          <section className="graph">
            <PieChart
              data={chartArray}
              lineWidth={40}
              animate={true}
              labelStyle={{fontFamily: "sans-serif", fontSize: ".5em"}}
            />
          </section>
          <div className="languages">
            {
              languagesArray.map((item) => <p className="languageItem">
                <span className={`language`} style={{ backgroundColor: `var(--${item[0]})`}}></span>
                {`${item[0]}`}
              </p>)
            }
          </div>
        </fieldset>
        <fieldset className="links">
          <legend>Links de referencia</legend>
          <a href={response.html_url} target="blank">Repositorio</a>
          {
            response.homepage && <a href={response.homepage} target="blank">Site</a>
          }
        </fieldset>
      </div>
    )
  }

  return(
    <section className="projects">
      <nav>
        {
          getGithubApi.map((repo, index) => {
            return <section
              key={index}
              className="selectRepo icon"
              onClick={ async () => getRepo(repo.id) }
              title={ `${repo.size} Kb` }
            >
              <img src={ fileIcon } alt="" className="projectIcon"/>
              <p>{repo.name.replaceAll("-", " ")}</p>
            </section>
          })
        }
      </nav>
      <div className="projectDetails">
        {
          currentRepo
        }
      </div>
    </section>
  )
}