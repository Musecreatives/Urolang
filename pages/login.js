import Link from "next/link";
import styles from "../styles/login.module.css";

export default function Login() {
  // // handles the submit button

  const handleSubmit = async (e) => {
    // stop the form from refreshing the page
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const textError = document.getElementById("textError");


    if (email.indexOf("@") == -1 || email.length < 6) {
      textError.innerHTML = "Please enter a valid email";
      return false;
    }

    if (password.length <= 4) {
      textError.innerHTML = "Password must be at least 6 characters";
      return false;
    }

    alert("Form Submitted Successfully!");

    // get data from the form

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    }

    // send data to the server in Json format
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send data to the server
    const endpoint = '/api/login';

    // send data to the server
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSONdata
    }

    // fetch data from the server
    const response = await fetch(endpoint, options);

    // get data from the server
    const result = await response.json();
  }


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
            <form onSubmit={handleSubmit}>
              <div className={styles.form_group}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className={styles.form_group}>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  required
                  textError
                />
              </div>
              <div className={styles.forgot_password}>
                <Link href="/forgotPassword">
                  <a>Forgot Password?</a>
                </Link>
              </div>
              <button type="submit" className={styles.btn1}>
                <a>Login</a>
              </button>
            </form>
            <div className={styles.dont_have_account}>
              <p>Don't have an account? Click below to create account</p>
            </div>
            <button className={styles.btn2}>
              <Link href="/signup">
                <a>Create Account</a>
              </Link>
            </button>
          </div>
        </div>

        <div className={styles.login_right_side}>
          <h1>Image here</h1>
        </div>
      </div>
    </>
  );
}
