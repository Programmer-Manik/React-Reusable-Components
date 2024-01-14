import {useState} from 'react'
import { useForm } from 'react-hook-form';

const {register, handleSubmit} = useForm()

const onSubmit = (data: any) => {
    console.log(data)
}

const NormalForm = () => {
   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <label htmlFor='name'>name</label>
         <input type="text"  id="name" {...register('name')} />
         <button type="submit">submit</button>
      </form>
   );
};

export default NormalForm;