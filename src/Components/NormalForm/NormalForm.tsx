// import {useState} from 'react'
import { useForm } from "react-hook-form";
import cn from "../../Utils/cn";

const NormalForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitData = (data: any) => {
    console.log(data);
  };

  const double = true ;

  return (
    <form onSubmit={handleSubmit(onSubmitData)} className={cn("border border-red-400  p-5 mx-auto",{'max-w-5xl':double,
      'max-w-md': !double,
  })}>
      <div className={cn(" border  border-blue-400 gap-5 grid grid-cols-1  justify-items-center",{
         'md:grid-cols-2' : double,        
      })}>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">name</label>
          <input className="w-full" type="text" id="name" {...register("name")} />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">email</label>
          <input className="w-full" type="text" id="name" {...register("name")} />
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">password</label>
          <input className="w-full" type="text" id="name" {...register("name")} />
        </div>
      </div>
      {/* <button type="submit">submit</button> */}
    </form>
  );
};

export default NormalForm;
