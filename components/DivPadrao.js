import styles from "styles/divPadrao.module.css"
export default function DivPadrao() {
  return (
    <>
    <div className={styles.contactContainer}>
        <h1 className={styles.title}>Contato</h1>
        <span className={styles.span}></span>
        <p className={styles.titleP}>tire suas dúvidas com a gente</p>
    </div>
    </>
  );
}
