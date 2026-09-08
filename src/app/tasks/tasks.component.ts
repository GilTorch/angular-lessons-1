import { Component, input } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { NewTaskData, Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './task/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NgIf,NgFor, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
   user = input<User>()
   tasks: Task[] = []
   isAddingTask = false;


   constructor(private taskService: TaskService){
    this.tasks = this.taskService.tasks
   }
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
