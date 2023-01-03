// const LoginForm = () => {
//   const handleSubmit = e => {
//     e.preventDefault();
//     // console.log(e.target.elements);
//     const { login, password } = e.target.elements;
//     console.log(login.value, password.value);
//   };

//   return (
//     <form autoComplete="off" onSubmit={handleSubmit}>
//       <label htmlFor="login">
//         Login
//         <input type="text" name="login" />
//       </label>
//       <label htmlFor="password">
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default LoginForm;
// ===========================================================================================================================================================

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import styled from 'styled-components';

const schema = yup.object().shape({
  login: yup.string().required(),
  password: yup.string().min(6).max(12).required(),
});

const initialValues = {
  login: '',
  password: '',
};

const Input = styled(Field)`
  font-size: 40px;
  color: grey;
`;
const LoginForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label htmlFor="login">
          Login
          <Input type="text" name="login" />
          <ErrorMessage component="div" name="login" />
        </label>
        <label htmlFor="password">
          Password
          <Input type="password" name="password" />
          <ErrorMessage component="div" name="password" />
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
export default LoginForm;
