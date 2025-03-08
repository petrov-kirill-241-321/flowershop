import { Header } from "../Header/Header";
import styles from "./Login.module.css";

export function Login() {
  return (
    <div className={styles.loginContainer}>
      <Header />
      <div className={styles.loginBox}>
        <h2 className={styles.loginTitle}>Вход</h2>

        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            className={styles.inputField}
            placeholder="Введите email"
          />
        </div>

        <div className={styles.inputGroup}>
          <label>Пароль</label>
          <input
            type="password"
            className={styles.inputField}
            placeholder="Введите пароль"
          />
        </div>

        <button className={styles.loginButton}>Войти</button>

        <p className={styles.registerLink}>
          Нет аккаунта? <a href="#">Зарегистрироваться</a>
        </p>
      </div>
    </div>
  );
}
