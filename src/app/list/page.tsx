import React from "react";
import AddTask from "../component/AddTask"
import TodoList from "../component/TodoList";
import { getAllTodos } from "../../../api";

export default async function list() {
  
   const tasks = await getAllTodos()
   console.log("task",tasks)
    return (
      <main>
    <div className="mt-6 max-w-4xl mx-auto items-center justify-between">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">To DO List</h1>
        <AddTask></AddTask>
      </div>
      <TodoList tasks ={tasks}/>
    </div>
      </main>
      
    );
  }



