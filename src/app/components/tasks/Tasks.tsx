import React from 'react'
import { TasksProps } from '@/app/types/types'


const Tasks = ({task}:TasksProps) => {
  return (
    <div className=' p-4 bg-black flex gap-5  border border-white rounded-lg'>
        <div className='flex grow '>
            {task.resume}
        </div>
        <input type='checkbox' name="borrar" id={task.id}   ></input>
        
    </div>
  )
}

export default Tasks