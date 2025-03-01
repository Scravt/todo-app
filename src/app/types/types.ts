export type Task = {
    user: string,
    date: string,
    resume: string
    id: string
    }

export interface TasksProps {
        task: Task;
      }

export interface ArrayTasksProps {
    tasks: Task[];
}

export interface IFormInput {
    user: string;
    date: string;
    resume: string;
  }