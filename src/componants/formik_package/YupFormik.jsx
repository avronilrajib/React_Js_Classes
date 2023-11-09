import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function YupFormik() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
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
  console.error(formik.errors.email);
  console.error(formik.errors.password);
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
