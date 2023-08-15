import { ChangeEvent, useState } from "react";
import { useTasks } from "../context/useTasks";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
    done: false,
  });

  const { createTask } = useTasks();


  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit =  (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    createTask(task);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          className="border-2 border-gray-700 rounded-lg bg-zinc-800  w-full block p-2 my-2"
          placeholder="Write a task"
          onChange={handleChange}
        />
        <textarea
          name="description"
          rows={3}
          className="border-2 border-gray-700 rounded-lg bg-zinc-800 w-full block p-2 my-2"
          placeholder="Write a description"
          onChange={handleChange}
        ></textarea>

        <label htmlFor="" className=" inline-flex items-center gap-x-2">
          <input
            type="checkbox"
            className=" h-5 w-5 text-indigo-600"
            onChange={(e) => setTask({ ...task, done: e.target.checked })}
          />
          <span>Done</span>
        </label>
        <button className="bg-indigo-500 px-3 block py-2 w-full">Save</button>
      </form>
    </div>
  );
}

export default TaskForm;
