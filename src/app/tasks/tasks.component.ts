import { Component, input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { NewTaskData, Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgIf,NgFor, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
   user = input<User>()

   isAddingTask = false;

   tasks: Task[] = [
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
]

   get selectedUserTasks(){
    return this.tasks.filter((task) => task.userId === this.user()?.id)
   }

   onCompleteTask(id: string){
     this.tasks = this.tasks.filter(t => t.id !== id);
   }

   onStartAddTask(){
      this.isAddingTask = true;
   }

   onCancelDialog(){
    this.isAddingTask = false;
   }

   onAddTask(taskData: NewTaskData){
    this.tasks.push({
      id: new Date().getTime().toString(),
      title: taskData.title,
      userId: this.user()?.id || 'u1',
      summary: taskData.summary,
      dueDate: taskData.date
    })
    this.isAddingTask = false
   }
}
