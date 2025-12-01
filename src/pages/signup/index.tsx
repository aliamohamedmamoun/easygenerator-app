import React, { useContext } from 'react';
import { Form, Formik, FormikValues } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { signUp } from '../../apis/auth';
import { APP_ROUTES } from '../../constants/routes';
import { AuthContext } from '../../contexts/AuthContext';

import styles from './signupForm.module.css';


const SignUp = () => {
  const navigate = useNavigate();
  const {fetchCurrentUser} = useContext(AuthContext)

  const signUpSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Minimum of 3 characters')
      .required('Please enter name'),
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
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Please confirm password'),
  });

  const handleSubmit = async (values: FormikValues, { resetForm }: any) => {
    const { name, password, email } = values;
    resetForm();
    try {
      const data = await signUp({ name, email, password });
      fetchCurrentUser()
      toast.success(data.message || 'Sign up successful');
      navigate(APP_ROUTES.HOME);
    } catch (err: any) {
      toast.error(err.response?.data?.message || 'Sign up failed try agin');
    }
  };
  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Sign up</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={signUpSchema}
      >
        {({ isValid, dirty }) => {
          return (
            <Form className={styles.form}>
              <InputField
                id="name"
                name="name"
                type="text"
                placeholder="Please enter name"
                label="Name"
                validate
              />
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
              <InputField
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Please confirm password"
                label="Confirm password"
                autoComplete="new-password"
                validate
              />
              <Button
                type="submit"
                variant="primary"
                className={styles.submitButton}
                disabled={!dirty || !isValid}
              >
                Sign up
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
export default SignUp;
