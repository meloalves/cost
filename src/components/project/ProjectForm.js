import { useEffect, useState } from 'react';

import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import styles from "./ProjectForm.module.css";

function Projects({ handleSubmit, btnText, projectData }) {

  const [categories, setCategories] = useState([]);
  const [project, setProject] =  useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Typed": "application/json"
      }
    })
      .then((resp) => resp.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, [])


  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  }

  function handleOnChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }


  function handleCategory(e) {
    setProject({ ...project, 
      category: {
      id: e.target.value,
      name: e.target.options[e.target.selectedIndex].text
    }});
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input 
        type="text" 
        text="Nome do projeto" 
        name="name" 
        placeholder="Insira o nome do projeto" 
        handleOnChange={handleOnChange}
        value={project.name ? project.name : ""}
      />
      <Input 
        type="number" 
        text="Orçamento do projeto" 
        name="budget" 
        placeholder="Insira o orçamento total" 
        handleOnChange={handleOnChange}
        value={project.budget ? project.budget : ""}
      />
      <Select 
        name="categoryID" 
        text="Selecione a categoria"
        options={categories}
        handleChange={handleCategory}
        value={project.category ? project.category.id : ""}
      />       
      <SubmitButton text={btnText} />

    </form>
  )
}

export default Projects