import AddToDo from "@/components/AddToDo";
import ToDoList from "@/components/ToDoList";


export default async function Home() {
  return (
    <div>
      <AddToDo />
      <ToDoList />
    </div>
  );
}
