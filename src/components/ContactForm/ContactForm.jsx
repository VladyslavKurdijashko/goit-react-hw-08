import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { addContact } from "../../redux/contacts/operations";
import css from "./ContactForm.module.css";
import { toast } from "react-hot-toast";
import { useState } from "react";

const formatPhoneNumber = (value) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 0) return "";

  const match = digits.match(/^(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})$/);

  if (match) {
    return match.slice(1, 5).filter(Boolean).join("-");
  }

  return digits;
};

const validationParams = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(
      /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/,
      "Phone number must be in the format 093-055-25-12"
    )
    .required("Required"),
});

function ContactForm() {
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");

  const handleSubmit = async (values, actions) => {
    try {
      await dispatch(addContact({ ...values, number: phone }));
      toast.success("Your contact added successfully", { duration: 1500 });
    } catch {
      toast.error("Failed to add contact");
    } finally {
      actions.resetForm();
      setPhone("");
    }
  };

  return (
    <div className={css.contactFormContainer}>
      <Formik
        initialValues={{ name: "", number: phone }}
        onSubmit={handleSubmit}
        validationSchema={validationParams}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ setFieldValue }) => (
          <Form className={css.formWrapper}>
            <label className={css.label}>
              Name
              <Field className={css.input} type="text" name="name" />
              <ErrorMessage
                className={css.errorMessage}
                name="name"
                component="span"
              />
            </label>

            <label className={css.label}>
              Number
              <Field
                className={css.input}
                type="text"
                name="number"
                value={phone}
                onChange={(e) => {
                  const input = e.target.value.slice(0, 13);
                  const formattedPhone = formatPhoneNumber(input);
                  setPhone(formattedPhone);
                  setFieldValue("number", formattedPhone);
                }}
                placeholder="093-055-25-12"
              />
              <ErrorMessage
                className={css.errorMessage}
                name="number"
                component="span"
              />
            </label>

            <button className={css.submitButton} type="submit">
              Add Contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default ContactForm;
