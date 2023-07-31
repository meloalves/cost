import styles from "./Home.module.css";
import saving from "../../img/savings.svg"
import LinkButton from "../layout/LinkButton";

function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>Bem-vindo ao <span>Costs</span></h1>
      <p>Comece a gerenciar os os seus projetos agora mesmo!</p>
      <LinkButton to="./newproject" text="Novo Projeto"/>
      <img src={saving} alt="Costs"/>
    </section>
  )
}

export default Home