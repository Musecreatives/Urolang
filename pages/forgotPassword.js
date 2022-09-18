import Link from "next/link";
import styles from "../styles/forgotPassword.module.css";
import { useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ForgotPassword = () => {
  const [alert, setAlert] = useState();

  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Insert a valid email"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setAlert();

    axios
      .post("/pages/forgotPassword", values)
      .then((response) => {
        const message = `Please check your email to reset your password.`;
        setAlert(["success", message]);

        resetForm();
      })
      .catch((error) => {
        if (!error.response.data.message) {
          setAlert(["alert", "Something went wrong"]);
        } else {
          const messages = error.response.data.message[0].messages;

          const list = [];
          messages.map((message, i) => {
            let item = "";
            if (i === 0) item += `<ul>`;

            item += `<li>${message.id}</li>`;

            if (i === messages.length - 1) item += `</ul>`;
            list.push(item);
          });

          setAlert(["alert", list]);
        }
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      {alert && (
        <div
          style={{
            backgroundColor:
              alert[0] === "success" ? "lightgreen" : "lightcoral",
          }}
        >
          <div dangerouslySetInnerHTML={{ __html: alert[1] }} />
        </div>
      )}

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) =>
          onSubmit(values, { setSubmitting, resetForm })
        }
      >
        {({ isSubmitting, isValid }) => (
    
            <div className={styles.container}>
              <h1>Forgot Password</h1>
              <p>Don't worry! It happens</p>
              <p>
                Please enter the email address associated with your account.
              </p>
              <Form className={styles.form_group}>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
                <div className="error">
                  <ErrorMessage name="email" />
                </div>
                <button type="submit" disabled={!isValid} className={styles.btn1}>
                {!isSubmitting && "Submit"}
              {isSubmitting && "Loading..."}
              </button>
              </Form>
            </div>
        )}
      </Formik>
    </>
  );
};

export default ForgotPassword;

{
  /* <div className={styles.container}>
            <h1>Forgot Password</h1>
            <p>Don't worry! It happens</p>
            <p>Please enter the email address associated with your account.</p>
            <Form className={styles.form_group}>
              <input type="email" placeholder="Email" />
            </Form>
            <button className={styles.btn1}>
              <Link href="#">
                <a>Submit</a>
              </Link>
            </button>
          </div> */
}
