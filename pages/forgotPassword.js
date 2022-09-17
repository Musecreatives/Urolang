import Link from "next/link";
import styles from "../styles/forgotPassword.module.css";

export default function forgotPassword() {
  return (
    <div>
      <div className={styles.container}>
        <h1>Forgot Password</h1>
        <p>Don't worry! It happens</p>
        <p>Please enter the email address associated with your account.</p>
        <form className={styles.form_group}>
          <input type="email" placeholder="Email" />
        </form>
        <button className={styles.btn1}>
          <Link href="#">
            <a>Submit</a>
          </Link>
        </button>
      </div>
    </div>
  );
}
