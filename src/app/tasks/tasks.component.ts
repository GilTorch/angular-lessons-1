import { Component, input, signal, WritableSignal } from '@angular/core';
import { User } from '../user/user.model';
import { TaskComponent } from './task/task.component';
import { NgFor, NgIf } from '@angular/common';
import { NewTaskData, Task } from './task/task.model';
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskService } from './task/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
   user = input<User>()
   tasks: WritableSignal<Task[]> = signal([])
   isAddingTask = false;


   constructor(private taskService: TaskService){
    this.tasks = this.taskService.tasks
   }
   get selectedUserTasks(){
    return this.tasks().filter((task) => task.userId === this.user()?.id)
   }

   onStartAddTask(){
      this.isAddingTask = true;
   }

   onCancelDialog(){
    this.isAddingTask = false;
   }

   onAddTask(taskData: NewTaskData){
    this.taskService.addTask({
      title: taskData.title,
      summary: taskData.summary,
      date: taskData.date
    },this.user()!.id)
    this.isAddingTask = false
   }
}
