import { Injectable, WritableSignal, signal } from "@angular/core";
import { User } from "../../user/user.model";
import { NewTaskData, Task } from "./task.model";


@Injectable({
    providedIn: 'root'
})
export class TaskService {
    tasks: WritableSignal<Task[]> = signal([
      {
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary:
          'Learn all the basic and advanced features of Angular & how to apply them.',
        dueDate: '2025-12-31',
      },
      {
        id: 't2',
        userId: 'u3',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop website',
        dueDate: '2024-05-31',
      },
      {
        id: 't3',
        userId: 'u3',
        title: 'Prepare issue template',
        summary:
          'Prepare and describe an issue template which will help with project management',
        dueDate: '2024-06-15',
      },
    ])
    

    constructor() {
      const tasks = localStorage.getItem('tasks');

      if(tasks){
        this.tasks.set(JSON.parse(tasks));
      }
    }

    getUserTasks(userId: string){
    return this.tasks().filter((task) => task.userId === userId)
   }

   private saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
   }

      addTask(taskData: NewTaskData, userId: string){
       this.tasks.set(
        [
            ...this.tasks(),
            {
            id: new Date().getTime().toString(),
            title: taskData.title,
            userId: userId,
            summary: taskData.summary,
            dueDate: taskData.date
            }
        ])
        this.saveTasks();
      }

    removeTask(id: string){
        this.tasks.set(this.tasks().filter(t => t.id !== id));
        this.saveTasks();
    }
}