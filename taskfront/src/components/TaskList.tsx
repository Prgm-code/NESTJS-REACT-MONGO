
import { Task } from "../interfaces/task.interfaces"
import TaskItem from "./TaskItem"
import { useTasks } from "../context/useTasks"

export default function TaskList() {
  const { tasks } = useTasks()


  return (
    <div>
      {
        tasks.map((task: Task)=>(
       ///   <TaskItem key={task._id} {...task}/>
          <TaskItem  {...task} key={task._id}/>
        ))

      }
    </div>
  )
}
