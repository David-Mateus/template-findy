import styles from "styles/Footer.module.css";
export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h3>Footer Example</h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            vitae felis scelerisque, gravida sapien non, cursus augue. Aenean id
            pretium turpis. Suspendisse eros nunc, sollicitudin nec.
          </p>

          <ul className={styles.socials}>
            <li>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa fa-google-plus"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa fa-youtube"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <i class="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerBottom}>
          <p>
            Copyright &copy <span id="year"></span> <a href="#">@Findy</a>{" "}
          </p>

        </div>
      </footer>
    </>
  );
}
