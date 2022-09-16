import Link from "next/link";
import styles from "../styles/login.module.css";

export default function signup ()  {
  return (
    <>
      <div className={styles.login_container}>
        <div className={styles.login_left_side}>
          <div className={styles.urolang_logo}>
            <h1>Urolang</h1>
          </div>
          <div className={styles.login_left_side_content}>
            <h2>Hi there!</h2>
            <p>Sign up to create a new account</p>
          </div>
          <div className={styles.login_forms}>
            <form>
            <div className={styles.form_group}>
                    <input type="name" name="email" id="email" placeholder="Email" />
                </div>
                <div className={styles.form_group}>
                    <input type="email" name="name" id="email" placeholder="Full name" />
                </div>
                <div className={styles.form_group}>
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>
            </form>
            <button className={styles.btn1}>
                <Link href="#"><a>Sign Up</a></Link>
            </button>
            <div className={styles.dont_have_account}>
                <p>Have an account? Click below to login</p>
            </div>
            <button className={styles.btn2}>
                <Link href="#"><a>Login</a></Link>
            </button>
          </div>
        </div>

        <div className={styles.login_right_side}>
          <h1>Image here</h1>
        </div>
      </div>
    </>
  );
};
