
'use client'
import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import { TaskTypes } from "../../../types/task";

interface TodoListProps {
  tasks: TaskTypes[]
}
const ToDoList : React.FC<TodoListProps> = ({tasks}) => {
  console.log("TodoList tasks:", tasks);
  return (
    <main>
      <Table isStriped aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>TASKS</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody>
        {tasks.map((task) => (
            // <Task key={task.id} task={task} />
            <TableRow key={task.id}>
             <TableCell>{task.text}</TableCell>
             <TableCell>Active</TableCell>
             </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );

}

export default ToDoList

