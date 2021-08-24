import "./App.css";
import { Formik } from "formik";
import * as Yup from "yup";

function App() {
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
            email: "",
            password: "",
            agreement: false,
          }}
          validationSchema={Yup.object({
            //hangi state neye benzemeli
            name: Yup.string().required(),
            email: Yup.string().email().required("email cant be empty"),
            password: Yup.string()
              .required("No password provided.")
              .min(8, "Password is too short - should be 8 chars minimum."),

            agreement: Yup.boolean().required(
              "You need to accept terms of agreement"
            ),
          })}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
            setTimeout(() => {
              resetForm();
              setSubmitting(false);
            }, 2000);
          }}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleReset,
            dirty,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <h3>Sign Up</h3>
              <br></br>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="input"
                value={values.name}
                onChange={handleChange}
              ></input>

              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Your email"
                className="input"
                value={values.email}
                onChange={handleChange}
              ></input>

              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="text"
                placeholder="Your password"
                className="input"
                value={values.password}
                onChange={handleChange}
              ></input>

              <div className="checkbox">
                <input
                  id="agreement"
                  type="checkbox"
                  value={values.agreement}
                  onChange={handleChange}
                ></input>
                <label htmlFor="agreement" className="checkbox-label">
                  I read the terms of agreement and i accept it
                </label>
              </div>

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

export default App;
