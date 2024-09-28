import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";

import Error from "../Error/Error";

import { apiRegister } from "../../redux/auth/operations";
import { selectAuthError } from "../../redux/auth/selectors";

import css from "./RegistrationForm.module.css";

const validationParams = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Enter a valid email!").required("Required"),
});

function RegistrationForm() {
  const dispatch = useDispatch();
  const error = useSelector(selectAuthError);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, actions) => {
    dispatch(apiRegister(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationParams}
    >
      <Form className={css.registrationFormContainer}>
        <label className={css.registrationFormLabel}>
          <span>Name</span>
          <Field
            className={css.registrationFormInput}
            type="text"
            name="name"
            placeholder="Harry Potter"
          />
          <ErrorMessage
            className={css.registrationFormErrorMessage}
            name="name"
            component="span"
          />
        </label>
        <label className={css.registrationFormLabel}>
          <span>Email</span>
          <Field
            className={css.registrationFormInput}
            type="text"
            name="email"
            placeholder="corners@mail.com"
          />
          <ErrorMessage
            className={css.registrationFormErrorMessage}
            name="email"
            component="span"
          />
        </label>
        <label className={css.registrationFormLabel}>
          <span>Password</span>
          <Field
            className={css.registrationFormInput}
            type="password"
            name="password"
            placeholder="example12345"
          />
          <ErrorMessage
            className={css.registrationFormErrorMessage}
            name="password"
            component="span"
          />
        </label>

        <button className={css.registrationFormButton} type="submit">
          Sign Up
        </button>
        {error && <Error />}
      </Form>
    </Formik>
  );
}

export default RegistrationForm;
