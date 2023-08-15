import { CreateTask, UpdateTask } from "../interfaces/task.interfaces";
const API_URL = "http://localhost:4000/api";



export const createTaskRequest = (task: CreateTask) =>
  fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

export const getTasksRequest = () =>
    fetch(`${API_URL}/tasks`, {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        },
    });
    
export const deleteTaskRequest = (id: string) =>
    fetch(`${API_URL}/tasks/${id}`, {
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        },
    });


export const  updateTaskRequest = (id: string, task: UpdateTask) => 

    fetch(`${API_URL}/tasks/${id}`, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
    });

  
