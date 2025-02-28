
'use client';


import { useForm, SubmitHandler } from "react-hook-form";




interface IFormInput {
  user: string;
  date: string;
  resume: string;
}

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);


  return (
    <form onSubmit={handleSubmit(onSubmit)} className='h-3/4 w-1/2 flex flex-col gap-4 bg-black border border-white' >
      <input
        {...register("user",
          {
            required: true,
            maxLength: {
              value: 15,
              message: "Max length is 15"
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Only letters are allowed"
            }
          })} 
          className='w-2/3 p-2 '
          />
      {errors.user && <span>{errors.user.message}</span>}

      <input {...register("date",
        {
          required: "complete this field",
          validate: (value) => {
            const today = new Date().toISOString().split("T")[0]; //YYYY-MM-DD
            return value > today || "La fecha debe ser posterior a la actual";
          }
        })
      } 
      className='w-2/3 p-2 '
      />
      {errors.date && <span>{errors.date.message}</span>}

      <input {...register("resume", { 
          required: "complete this field",
          pattern: {
            value: /^[A-Za-z0-9 ]+$/i,
            message: "Only letters are allowed"
          } 

      })}
      className='w-2/3 p-2 '
      />

      {errors.resume && <span>{errors.resume.message}</span>}

      <button type="submit" className='w-5 h-3 bg-green-300 hover:bg-green-900' />
    </form>
  )
}

export default Form