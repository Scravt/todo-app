'use client';
import { useForm, SubmitHandler } from "react-hook-form";
import { IFormInput } from '@/app/types/types';
import { addTask } from "@/app/API";




const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data =>{
    const newTask = {
      user: data.user,
      date: data.date,
      resume: data.resume
    }
    addTask(newTask);
  } 

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='h-1/2 min-h-fit max-h-96 w-1/2  p-3 flex flex-col items-center justify-center gap-4 bg-black border border-white rounded-lg' >
      <input
        {...register("user",
          {
            required: true,
            minLength: {
              value: 3,
              message: "Min length is 3"
            },
            maxLength: {
              value: 15,
              message: "Max length is 15"
            },
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "Only letters are allowed"
            }
          })}
        className='w-2/3 p-2 rounded-xl border border-white'

        placeholder="User"
      />
      {errors.user && <span className=" text-red-600"   >{errors.user.message}</span>}

      <input {...register("date",
        {
          required: "complete this field",
          validate: (value) => {
            const today = new Date().toISOString().split("T")[0]; //YYYY-MM-DD
            return value > today || "La fecha debe ser posterior a la actual";
          }
        })
      }
        className='w-2/3 p-2 rounded-xl border border-white'
        placeholder="Date"
      />
      {errors.date && <span className=" text-red-600">{errors.date.message}</span>}

      <input {...register("resume", {
        required: "complete this field",
        pattern: {
          value: /^[A-Za-z0-9 ]+$/i,
          message: "Only letters are allowed"
        }
      })}
        className='w-2/3 p-2 rounded-xl border border-white'
        placeholder="Resume"
      />

      {errors.resume && <span className=" text-red-600">{errors.resume.message}</span>}

      <div className="flex justify-end w-2/3">
        <button type="submit" className='w-20   hover:bg-white hover:text-black border rounded-md' >
          Submit
        </button>
      </div>

    </form>
  )
}

export default Form