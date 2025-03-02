import React from 'react'
import { TasksProps } from '@/app/types/types'
import { updateTask } from '@/app/API'
//import deleteIcon from '@/../public/delete.png';


const Tasks = ({task}:TasksProps) => {
  return (
    <div className=' p-4 bg-black flex gap-5  border border-white rounded-lg'>
        <div className='flex grow '>
            {task.resume}
        </div>
       <span>
            <img src='deleteIcon' alt='delete' onClick={() => updateTask(task.id, {active: false})} />

       </span>
        
    </div>
  )
}

export default Tasks