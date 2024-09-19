import { useEffect, useState } from "react";
import "./projectsWindow.css"
import callFetch from "../../services/callFetch";

export default function ProjectsWindow() {
  const [ getGithubApi, setGithubApi ] = useState(Array<any>)
  const [ currentRepo, setCurrentRepo ] = useState(<h3>Selecione um projeto para ver mais informações.</h3>)

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
    setCurrentRepo(
      <div>
        <h2 className="projectName">{response.name.replaceAll("-", " ")}</h2>
        <div className="languages">
          {
            languagesArray.map((item) => <p className="languageItem">
              <span className={`${item[0]} language`}></span>
              {`${item[0]}: ${item[1]}`}
            </p>)
          }
        </div>
      </div>
    )
  }

  return(
    <section className="projects">
      <nav>
        {
          getGithubApi.map((repo) => {
            return <section
              className="selectRepo"
              onClick={ async () => getRepo(repo.id) }
            >
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