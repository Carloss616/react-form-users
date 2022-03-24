import { FormikProps } from 'formik';
import React, { FC } from 'react';
import { FormValues } from '../Home';
import Input from './Input';
import Loading from './Loading';

type FormProps = {
  formik: FormikProps<FormValues>;
};

const Form: FC<FormProps> = ({ formik }) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formik.submitForm();
  };

  const loading = formik.isSubmitting;

  return (
    <form onSubmit={handleSubmit}>
      <Input
        required
        autoFocus
        id="firstName"
        className="mb-3"
        label="First Name"
        type="text"
        onChange={formik.handleChange('firstName')}
        value={formik.values.firstName}
        error={formik.errors.firstName}
        disabled={loading}
      />
      <Input
        required
        id="lastName"
        className="mb-3"
        label="Last Name"
        type="text"
        onChange={formik.handleChange('lastName')}
        value={formik.values.lastName}
        error={formik.errors.lastName}
        disabled={loading}
      />
      <Input
        required
        id="inputEmail"
        className="mb-3"
        label="Email"
        type="email"
        onChange={formik.handleChange('email')}
        value={formik.values.email}
        error={formik.errors.email}
        disabled={loading}
      />
      <Input
        required
        id="inputNote"
        className="mb-5"
        label="Note"
        type="text"
        onChange={formik.handleChange('note')}
        value={formik.values.note}
        error={formik.errors.note}
        disabled={loading}
      />

      <button
        type="submit"
        className="btn btn-outline-dark"
        disabled={!formik.isValid || loading}
      >
        {loading ? <Loading /> : '+ Add User'}
      </button>
    </form>
  );
};

export default Form;
