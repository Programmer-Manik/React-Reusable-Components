// import {useState} from 'react'
import { useForm } from "react-hook-form";
import cn from "../../Utils/cn";
import Button from "../Ui/Button";
import {zodResolver} from '@hookform/resolvers/zod'
import { TNormalForm, signUpSchema } from "./validation";



const NormalForm = () => {
  const { register, handleSubmit, formState:{errors} } = useForm<TNormalForm>({resolver:zodResolver(signUpSchema)});

  const onSubmitData = (data: any) => {
    console.log(data);
  };

  const double = true;

  return (
    <form
      onSubmit={handleSubmit(onSubmitData)}
      className={cn("border border-red-300 rounded-lg shadow-sm  p-5 mx-auto", {
        "max-w-5xl": double,
        "max-w-md": !double,
      })}
    >
      <div
        className={cn(" gap-5 grid grid-cols-1  justify-items-center", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md">
          <label className="block" htmlFor="name">
            name
          </label>
          <input
            className="w-full"
            type="text"
            id="name"
            {...register("name")}
          />
          {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="email">
            email
          </label>
          <input
            className="w-full"
            type="email"
            id="email"
            {...register("email",{required:true})}
          />
          {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="password">
            password
          </label>
          <input
            className="w-full"
            type="password"
            id="name"
            {...register("password",{required:true})}
          />
          {errors.password && <span className="text-xs text-red-500">{errors.password.message}</span>}
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="select">
            Select
          </label>
          <select>
            <option>one</option>
            <option>tow</option>
            <option>three</option>
            <option>four</option>
          </select>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="textarea">
            textarea
          </label>
          <textarea></textarea>
        </div>
        <div className="w-full max-w-md">
          <label className="block" htmlFor="checkbox">
            checkbox
          </label>
          <input type="checkbox" name="checkbox" />
        </div>
      </div>
      <div
        className={cn("grid grid-cols-1 justify-items-center gap-5 my-8 ", {
          "md:grid-cols-2": double,
        })}
      >
        <div className="w-full max-w-md col-start-1 md:col-start-2 flex justify-end">
          <Button className="w-full md:w-fit" type="submit">
            submit
          </Button>
        </div>
      </div>
    </form>
  );
};

export default NormalForm;
