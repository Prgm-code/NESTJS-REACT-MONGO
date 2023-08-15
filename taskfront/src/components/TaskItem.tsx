import { useTasks } from "../context/useTasks";
import { Task } from "../interfaces/task.interfaces";
import { IoCheckmarkDone, IoTrash } from "react-icons/io5";

function TaskItem(task: Task) {
  const { deleteTask, updateTask } = useTasks();

  return (
    <div
      key={task._id}
      className="border-gray-900 p-2 my-2 flex justify-between hover:bg-gray-800 hover:cursor-pointer"
    >
      <h1 className="text-xl font-bold">{task.title}</h1>
      <p>{task.description}</p>
      <div className="flex gap-x-2">
        { task.done ? (
          <IoCheckmarkDone
            className="text-green-500 "
            onClick={async () => {
              updateTask(task._id, {
                done: !task.done,
              });
            }}
          />
        ) : (
          <IoCheckmarkDone
            className="bg-text-gray-500"
            onClick={async () => {
              updateTask(task._id, {
                done: !task.done,
              });
            }}
          />
        )}
        <IoTrash
          className=""
          onClick={async () => {
            if (!window.confirm("Are you sure you want to delete this task?"))
              return;
            await deleteTask(task._id);
          }}
        />
      </div>
    </div>
  );
}

export default TaskItem;
