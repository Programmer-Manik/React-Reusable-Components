// import {useState} from 'react'
import { useForm } from "react-hook-form";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitData = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitData)} className="border border-red-400 max-w-5xl p-5 mx-auto">
      <div className=" border p-4 border-purple-400 gap-5 grid grid-cols-2">
        <div className="w-full">
          <label className="block" htmlFor="name">name</label>
          <input className="w-full" type="text" id="name" {...register("name")} />
        </div>
        <div className="w-full">
          <label className="block" htmlFor="name">email</label>
          <input className="w-full" type="text" id="name" {...register("name")} />
        </div>
        <div className="w-full">
          <label className="block" htmlFor="name">password</label>
          <input className="w-full" type="text" id="name" {...register("name")} />
        </div>
      </div>
      {/* <button type="submit">submit</button> */}
    </form>
  );
};

export default NormalForm;
