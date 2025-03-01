import Form from "./components/form/Form";
import TaskList from "./components/taskList/TaskList";


export default function Home() {
  return (
    <div  className="flex flex-col gap-5 p-6  items-center  h-screen">
      <Form />
      <TaskList />
    
    </div>
  );
}
