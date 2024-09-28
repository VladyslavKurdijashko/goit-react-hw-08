import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Error from "../Error/Error";

import { apiLogin } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

import css from "./LoginForm.module.css";

const validationParams = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Enter a valid email!").required("Required"),
});

function LoginForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(apiLogin(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationParams}
    >
      <Form className={css.loginFormContainer}>
        <label className={css.loginFormLabel}>
          Email
          <Field
            className={css.loginFormInput}
            type="text"
            name="email"
            placeholder="corners@mail.com"
          />
          <ErrorMessage className={css.loginFormErrorMessage} name="email" component="span" />
        </label>
        <label className={css.loginFormLabel}>
          Password
          <Field
            className={css.loginFormInput}
            type="password"
            name="password"
            placeholder="example12345"
          />
          <ErrorMessage className={css.loginFormErrorMessage} name="password" component="span" />
        </label>

        <button className={css.loginFormButton} type="submit">
          Log In
        </button>
        {error && <Error />}
      </Form>
    </Formik>
  );
}

export default LoginForm;