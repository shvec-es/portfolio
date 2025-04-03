import { Formik,Form, Field, ErrorMessage } from 'formik';
import st from './App.module.css';

const FormSend = (props) => {
    return <Formik initialValues={{ email: '', message: '' }} validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);

        }, 400);
      }}>
           {({ isSubmitting }) => (
         <Form className={st.form}>
           <Field type="email" name="email" placeholder="Your email*" />
           <ErrorMessage name="email" component="div" />
           <Field as="textarea" type="text" name="message" placeholder="Message" />
           <ErrorMessage name="message" component="div" />
           <button className={st.btn_send} type="submit" disabled={isSubmitting}>
             Send message
           </button>
         </Form>
       )}
        </Formik>
    }
    
    export default FormSend;