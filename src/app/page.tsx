import Form from "./components/form/Form";
import TaskList from "./components/taskList/TaskList";


export default function Home() {
  return (
    <div  className="flex h-[calc(100vh-4rem)] flex-col gap-5 p-6  items-center  ">
      <Form />
      <TaskList />
    
    </div>
  );
}
