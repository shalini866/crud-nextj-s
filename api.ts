import { TaskTypes } from "./types/task"

// const baseUrl = "http://localhost:3001/tasks"

export const getAllTodos = async (): Promise<TaskTypes[]> => {
 const res = await fetch("http://localhost:3001/tasks")
 console.log("res from api",res);
 const todos = await res.json()
 console.log("todos from api",todos)
 return todos
}





