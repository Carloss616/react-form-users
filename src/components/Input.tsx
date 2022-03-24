import React, { FC } from 'react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input: FC<InputProps> = ({ label, error, className, id, ...props }) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        {...props}
      />
      <div className="invalid-feedback">{error}</div>
    </div>
  );
};

export default Input;
