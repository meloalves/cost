import { LuFacebook, LuInstagram, LuLinkedin } from "react-icons/lu";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialist}>
        <li>
          <LuFacebook />
        </li>
        <li>
          <LuInstagram />
        </li>
        <li>
          <LuLinkedin />
        </li>
      </ul>      
      <p className={styles.copyRight}>
        <span>Costs &copy; 2021</span>
      </p>
    </footer>

  )
}

export default Footer