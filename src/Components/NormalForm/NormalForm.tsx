// import {useState} from 'react'
import { useForm } from "react-hook-form";

const onSubmitData = (data: any) => {
   console.log(data)
}

const NormalForm = () => {

   const {register,handleSubmit} = useForm();
   
   return (
      <form onSubmit={handleSubmit(onSubmitData)}>
         <label htmlFor='name'>name</label>
         <input type="text"  id="name" {...register('name')} />
         <button type="submit">submit</button>
      </form>
   );
};

export default NormalForm;