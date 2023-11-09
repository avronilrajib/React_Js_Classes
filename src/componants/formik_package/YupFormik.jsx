import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function YupFormik() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(6, "name must have 8 char").required(),
      email: Yup.string().email().required(),
      password: Yup.string()
        .min(8, "password must have atleast 8 char")
        .required(),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm({ values: "" });
    },
  });
  //   console.log(formik.errors.email);
  //   console.log(formik.errors.password);
  //   console.log(formik.errors.name);
  const nameError = formik.touched.name && formik.errors.name && (
    <span style={{ color: "red" }}>{formik.errors.name}</span>
  );
  const emailError = formik.touched.email && formik.errors.email && (
    <span style={{ color: "red" }}>{formik.errors.email}</span>
  );
  const passwordError = formik.touched.password && formik.errors.password && (
    <span style={{ color: "red" }}>{formik.errors.password}</span>
  );
  return (
    <div>
      <section>
        <form action="" onSubmit={formik.handleSubmit}>
          <h1> login Form...</h1>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          {nameError}
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <br />
            {emailError}
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <br />
            {passwordError}
          </div>
          <div>
            <button type="submit">login</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default YupFormik;
