
'use client'
import React, { FormEventHandler, useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";
import { FaPlus } from "react-icons/fa6";
import CustomModal from "./Modal";
import { Input } from "@nextui-org/react";


export default function AddTask() {
  const [isOpen, setModalOpen,] = useState(false);
  const [newTaskValue, setNewTaskValue] = useState<string>('');

  const handleNewTodo: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("newTaskValue", newTaskValue);
  }
  return (
    <main>
      <div>
        <Button color="primary" className="w-full ml-2" onPress={() => setModalOpen(true)}>
          Add Task <FaPlus />
        </Button>
        <CustomModal isOpen={isOpen} onClose={() => setModalOpen(false)} setModalOpen={setModalOpen}>
          <form onSubmit={handleNewTodo}>
            <h3 className="font-blod text-lg flex justify-center justify-items-center pb-2 ">Add New Task</h3>
            <div className="modal-action gap-2 inline-flex items-center justify-center ml-10">
              <Input isClearable type="text"value={newTaskValue} onChange={(e) => setNewTaskValue(e.target.value)}onClear={() => setNewTaskValue('')} className="max-w-xs"/>
              <Button size="sm" color="primary" type="submit">Submit</Button>
            </div>

          </form>
        </CustomModal>
      </div>
    </main>
  );
}
