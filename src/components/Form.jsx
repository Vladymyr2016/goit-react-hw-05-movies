import React from 'react';
import { useForm } from 'react-hook-form';

const Form = ({ changeQuery }) => {
  const { register, reset, handleSubmit } = useForm();

  const submit = data => {
    changeQuery(data.queryStr);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input {...register('queryStr')} type="text" />
      <button>Search</button>
    </form>
  );
};

export default Form;
