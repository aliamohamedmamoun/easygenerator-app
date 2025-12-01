import React ,{useContext}from 'react';
import { Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { login } from '../../apis/auth';
import { APP_ROUTES } from '../../constants/routes';
import { AuthContext } from '../../contexts/AuthContext';

import styles from '../signup/signupForm.module.css';

const SignIn = () => {
  const navigate = useNavigate();
  const {fetchCurrentUser} = useContext(AuthContext)

  const signInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please enter email'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
      .matches(/[0-9]/, 'Password must contain at least one number')
      .matches(
        /[^a=zA-Z0-9-9]/,
        'Password must contain at least one special character'
      )
      .required('Please enter password'),
  });

  const handleSubmit = async (values: FormikValues, { resetForm }: any) => {
    const { password, email } = values;
    resetForm();
    try {
      const data = await login({ email, password });
      fetchCurrentUser()
      toast.success(data.message || 'login successful');
      navigate(APP_ROUTES.HOME);
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'login failed try agin');
    }
  };
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Login</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={signInSchema}
      >
        {({ isValid, dirty }) => {
          return (
            <Form className={styles.form}>
              <InputField
                id="email"
                name="email"
                type="text"
                placeholder="Please enter email"
                label="Email"
                autoComplete="username"
                validate
              />
              <InputField
                id="password"
                name="password"
                type="password"
                placeholder="Please enter password"
                label="Password"
                autoComplete="new-password"
                validate
              />

              <Button
                type="submit"
                variant="primary"
                className={styles.submitButton}
                disabled={!dirty || !isValid}
              >
                login
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default SignIn;
