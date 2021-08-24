import { Formik } from "formik";
import { useState } from "react";
export default function LoginForm({ Login, error }) {
  const [details, setDetails] = useState({ name: "", password: "" });

  return (
    <div className="container">
      <div className="brand-box">
        <h1>Coding Game</h1>
        <br></br>
        <p>
          {" "}
          Improve your skills by challenging your friends, or training by
          yourself.
        </p>
      </div>
      <div className="magic-form">
        <Formik
          initialValues={{
            name: "",
            password: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = "Name is required";
            }

            if (!values.password) {
              errors.password = "Required";
            }

            return errors;
          }}
          onSubmit={(user, { resetForm, setSubmitting }) => {
            Login(user);
            setTimeout(() => {
              setSubmitting(false);
              resetForm();
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleSubmit,
            handleReset,
            dirty,
            isSubmitting,
            //there are other goodies :)
          }) => (
            <form onSubmit={handleSubmit}>
              <h3>Login</h3>
              <br></br>
              <div>
                <label htmlFor="name" className="title">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input"
                  value={values.name}
                  onChange={handleChange}
                ></input>
                {errors.name && touched.name && errors.name}
              </div>

              <div>
                <label htmlFor="password" className="title">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Your password"
                  className="input"
                  value={values.password}
                  onChange={handleChange}
                ></input>
                {errors.password && touched.password && errors.password}
              </div>
              <span className="error-message">{error}</span>
              <br></br>
              <button type="submit" disabled={!dirty || isSubmitting}>
                {" "}
                Sign Up
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}
