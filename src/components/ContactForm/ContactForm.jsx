import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";
import { useId } from "react";

export default function ContactForm() {
  const FeedbackShema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.setSubmitting(false);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackShema}
    >
      <Form className={css.container}>
        <div className={css.form}>
          <label className={css.name} htmlFor={nameFieldId}>
            Name
          </label>
          <Field type="text" name="name" className={css.field} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.form}>
          <label className={css.name} htmlFor={numberFieldId}>
            Number
          </label>
          <Field type="text" name="number" className={css.field} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
