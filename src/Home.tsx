import { useMutation, useQuery } from '@apollo/client';
import { useFormik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import Form from './components/Form';
import List from './components/List';
import { ADD_USER, DELETE_USER } from './graphql/mutations';
import { GET_USERS } from './graphql/queries';
import { UserData } from './types/User';

export type FormValues = Omit<UserData, '_id'>;

const Home = () => {
  const { loading, data, refetch } = useQuery<{ users: UserData[] }>(GET_USERS);
  const [addUser] = useMutation<{ addUser: UserData }>(ADD_USER);
  const [deleteUser] = useMutation<{ deleteUser: string }>(DELETE_USER);

  const users = (data?.users || []) as UserData[];

  const validationSchema = yup.object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Email is invalid').required('Email is required'),
    note: yup.string().required('Note is required'),
  });

  const formik = useFormik<FormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      note: '',
    },
    validationSchema,
    validateOnMount: false,
    onSubmit: async (variables, { resetForm }) => {
      try {
        console.log({ variables });
        if (!formik.isValid) return;

        const { data } = await addUser({ variables });
        console.log({ data });

        if (data?.addUser) {
          resetForm();
          refetch();
        }
      } catch (error) {
        console.error({ error });
      }
    },
  });

  const handleDelete = async (_id: string) => {
    try {
      await deleteUser({ variables: { _id } });
      await refetch();
    } catch (error) {
      console.error({ error });
    }
  };

  return (
    <div className="container h-100">
      <div className="w-100 h-100 d-flex align-items-center">
        <div className="row w-100">
          <h1 className="col-12 text-center">Add Users</h1>
          <div className="col-12 col-sm-6">
            <Form formik={formik} />
          </div>
          <div className="col-12 col-sm-6">
            <List users={users} loading={loading} handleDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
