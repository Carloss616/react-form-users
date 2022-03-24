import React, { FC } from 'react';
import { UserData } from '../types/User';
import Loading from './Loading';
import User from './User';

type ListProps = {
  users: UserData[];
  loading: boolean;
  handleDelete: (_id: string) => Promise<void>;
};

const List: FC<ListProps> = ({ users, loading, handleDelete }) => {
  return (
    <ul className="my-3">
      {loading ? (
        <Loading />
      ) : users.length ? (
        users.map((user) => (
          <User
            key={user._id}
            _id={user._id}
            label={`${user.firstName} ${user.lastName} | ${user.note} | ${user.email}`}
            handleDelete={handleDelete}
          />
        ))
      ) : (
        <li>No users yet...</li>
      )}
    </ul>
  );
};

export default List;
