import { useLocation } from "react-router-dom"

import Message from "../layout/Message"
import Container from "../layout/Container"
import Loading from "../layout/Loading"
import LinkButton from "../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"

import styles from "./Projects.module.css"
import { useState, useEffect } from "react"

function Projects() {

  const [projects, setProjects] = useState([]);
  const [removeLoading, setRemoveLoading] = useState(false);
  const [ProjectMsg, setProjectMsg] = useState()

  const location = useLocation()
  let message = ""
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/projects", {
        method: "GET",
        headers: {
          "Content-type": "application/json"
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data)
          setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, 300)
  }, [])

  function removeProject(id) {

    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      },
    })
      .then((resp) => resp.json())
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id))
        setProjectMsg("Projeto removido com sucesso.")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.projectContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar projeto"></LinkButton>
      </div>
      {message && <Message type="success" msg={message} />}
      {ProjectMsg && <Message type="error" msg={ProjectMsg} />}
      <Container customClass="start">
        {projects.length > 0 && 
          projects.map((project, id) => (
            <ProjectCard 
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              handleRemove={removeProject}
              key={id}
            />
          ))}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 &&
            <p>Não há projetos cadastrados.</p>
          }
      </Container>
    </div>
  )
}

export default Projects