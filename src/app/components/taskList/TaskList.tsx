'use client';

import { Task } from '@/app/types/types'
import Tasks from '@/app/components/tasks/Tasks'
import { getTasks } from '@/app/API'
import { useEffect, useState } from 'react'

const TaskList = () => {
  const [arrayTasks, setArrayTasks] = useState<Task[]>([]);


  useEffect(() => {
    const ArrayTask = getTasks()
    ArrayTask.then((data) => {
      setArrayTasks(data.tasks)
    })
    console.log(arrayTasks)
  }, [])

  const handleClick = () => {
    console.log(arrayTasks)
  }


  return (
    <div className='w-1/2 min-h-1/2 max-h-2/3 p-4 bg-black flex flex-col gap-5 items-center border border-white rounded-lg'>
      <h1 className='h-2 text-3xl p-4 self-start'
      onClick={handleClick}
      > List </h1>

      <div className='w-5/6  max-h-4/5  p-4 flex flex-col gap-5  overflow-y-auto scroll-smooth '>
        {arrayTasks?.map((task) => (
          task.active && <Tasks key={task.id} task={task} />
        ))}
          
      </div>
    </div>
  )
}

export default TaskList