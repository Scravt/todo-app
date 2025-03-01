import { TasksProps } from '@/app/types/types'
import Tasks from '@/app/components/tasks/Tasks'
import { arrayTasks } from '@/app/API'

const TaskList = () => {

  return (
    <div className='w-1/2 min-h-1/2 max-h-2/3 p-4 bg-black flex flex-col gap-5 items-center border border-white rounded-lg'>
        <h1 className='h-2 text-3xl p-4 self-start' > List </h1>

        <div className='w-5/6  max-h-4/5  p-4 flex flex-col gap-5  overflow-y-auto scroll-smooth '>
          {arrayTasks.map(({task}:TasksProps) => (
            <Tasks key={task.id} task={task} /> 
          ))}
        </div>
    </div>
  )
}

export default TaskList