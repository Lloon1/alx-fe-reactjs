import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegistrationForm = () => {
const initialValues = {
    username: '',
    email: '',
    password: '',
};

const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
});

const onSubmit = (values) => {
    console.log('Form submitted:', values);
    // Here you would send the data to the API
};

return (
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    >
    <Form>
        <div>
        <label>Username</label>
        <Field type="text" name="username" />
        <ErrorMessage name="username" component="p" />
        </div>

        <div>
        <label>Email</label>
        <Field type="email" name="email" />
        <ErrorMessage name="email" component="p" />
        </div>

        <div>
        <label>Password</label>
        <Field type="password" name="password" />
        <ErrorMessage name="password" component="p" />
        </div>

        <button type="submit">Register</button>
    </Form>
    </Formik>
);
};

export default RegistrationForm;
