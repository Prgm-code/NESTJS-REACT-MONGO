import { createContext, useEffect, useState } from "react";
import { createTaskRequest, getTasksRequest, deleteTaskRequest, updateTaskRequest} from "../api/tasks";
import { CreateTask, Task, UpdateTask } from "../interfaces/task.interfaces";

interface TaskContextProps {
  tasks: Task[];
    createTask: (task: CreateTask) =>  Promise<void>
    deleteTask: (id: string) => Promise<void>;
    updateTask: (id: string, task: UpdateTask) => Promise<void>;

}

export const TaskContext = createContext<TaskContextProps>({
  tasks: [],
    createTask: async () => {},
    deleteTask: async () => {},
    updateTask: async () => {},
});

interface Props {
  children: React.ReactNode;
}

export const TaskProvider: React.FC<Props> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    getTasksRequest()
      .then((response) => response.json())
      .then((data) => setTasks(data));
  }, []);

  const createTask = async (task: CreateTask) => {
    const res = await createTaskRequest(task);
    const data = await res.json();

    setTasks([...tasks, data ]);
  };

  const deleteTask = async (id: string) => {
    const res = await deleteTaskRequest(id);
    console.log(res);
  
   if ( res.status === 204) {
    const newTasks = tasks.filter((task) => task._id !== id);
    setTasks(newTasks);
   }

  }

  const updateTask = async (id: string ,task: UpdateTask ) => {
    const res = await updateTaskRequest(id, task);
    const data = await res.json();
    console.log(data);

    const newTasks = tasks.map((task) =>( task._id === id ? data : task));
    setTasks(newTasks);
  }


  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask, updateTask }}>{children}</TaskContext.Provider>
  );
};
