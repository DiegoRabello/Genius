import styles from "./styles.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerText}>
        <p>@Genius</p>
        <p>2024</p>
        <div className={styles.footerDivisor}></div>
      </div>
      <div className={styles.developers}>
        <p>
          Developed by{" "}
          <a href="https://github.com/DiegoRabello/Genius">Diego Rabello</a>
        </p>
        <p>
          Developed by{" "}
          <a href="https://github.com/davimoura27/Genius">Davi Moura</a>
        </p>
        <p>
          Developed by <a href="https://github.com">Maria Eduarda</a>
        </p>
        <p>
          Developed by{" "}
          <a href="https://github.com/matheus-moura-dev">Patrick dos Santos</a>
        </p>
      </div>
    </div>
  );
}
