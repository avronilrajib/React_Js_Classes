import React from "react";
import { useFormik } from "formik";

function Formik() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });

  return (
    <div>
      <h1>Login..</h1>
      <form action="" onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            name="password"
            id="password"
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Formik;
