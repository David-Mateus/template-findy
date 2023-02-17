import Link from "next/link";
import styles from "../styles/NavBar.module.css"
export default function Navbar() {
  return (
    <>
    <h1> <Link href="/" className={styles.title}>Findy</Link></h1>
      <div >
        
        <ul className={styles.navbar}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">Sobre</Link></li>
          <li><Link href="/contato">Contato</Link></li>
          
        </ul>
        <div className={styles.div}></div>
      </div>
    </>
  );
}
