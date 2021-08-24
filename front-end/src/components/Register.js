import { Formik } from "formik";

function Register() {
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
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!values.name) {
              errors.name = "Name is required";
            }

            if (!values.password) {
              errors.password = "Required";
            } else if (values.password.length < 8) {
              errors.password = "Minimum length is 8";
            }

            if (!values.agreement)
              errors.agreement = "You have to accept terms of agreement";
            return errors;
          }}
          onSubmit={(values, { resetForm, setSubmitting }) => {
            console.log(values);
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
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
              <h3>Sign Up</h3>
              <br></br>
              <div>
                <label htmlFor="name">Name</label>
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
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  className="input"
                  value={values.email}
                  onChange={handleChange}
                ></input>
                {errors.email && touched.email && errors.email}
              </div>
              <div>
                <label htmlFor="password">Password</label>
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

              <div className="checkbox">
                <input
                  className="tick"
                  id="agreement"
                  type="checkbox"
                  value={values.agreement}
                  onChange={handleChange}
                ></input>
                <label htmlFor="agreement" className="checkbox-label">
                  I read the terms of agreement and i accept it
                </label>
                <br></br>
              </div>
              {errors.agreement && touched.agreement && errors.agreement}
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

export default Register;
