import React from 'react'
import { TasksProps } from '@/app/types/types'


const Tasks = ({task}:TasksProps) => {
  return (
    <div>
        <div>
            {task.resume}
        </div>
        <select name="borrar" id={task.id}   ></select>
        
    </div>
  )
}

export default Tasks