import React, { FC, useState } from 'react';
import Loading from './Loading';

type UserProps = {
  _id: string;
  label: string;
  handleDelete: (_id: string) => Promise<void>;
};

const User: FC<UserProps> = ({ _id, label, handleDelete }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    await handleDelete(_id);
    setLoading(false);
  };

  return (
    <li>
      {label}
      <button
        type="button"
        className="ms-1 btn btn-outline-danger btn-sm"
        onClick={handleClick}
        disabled={loading}
      >
        {loading ? <Loading /> : 'Remove'}
      </button>
    </li>
  );
};

export default User;
