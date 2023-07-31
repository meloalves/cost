import loading from "../../img/loading.gif"

import styles from "./Loading.module.css"

function Loading() {
  return (
    <div className={styles.loaderContainer}>
      <img className={styles.loader} src={loading} alt="loading"/>
    </div>
  )
}

export default Loading