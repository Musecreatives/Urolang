import Link from "next/link";
import styles from "../styles/login.module.css";



export default function Login ()  {
  return (
    <>
      <div className={styles.login_container}>
        <div className={styles.login_left_side}>
          <div className={styles.urolang_logo}>
            <h1>Urolang</h1>
          </div>
          <div className={styles.login_left_side_content}>
            <h2>Welcome Back!</h2>
            <p>Login into your account</p>
          </div>
          <div className={styles.login_forms}>
            <form>
                <div className={styles.form_group}>
                    <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div className={styles.form_group}>
                    <input type="password" name="password" id="password" placeholder="Password" />
                </div>
                <div className={styles.forgot_password}>
                    <Link href="#"><a>Forgot Password?</a></Link>
                </div>
            </form>
            <button className={styles.btn1}>
                <Link href="#"><a>Login</a></Link>
            </button>
            <div className={styles.dont_have_account}>
                <p>Don't have an account? Click below to create account</p>
            </div>
            <button className={styles.btn2}>
                <Link href="#"><a>Create Account</a></Link>
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
