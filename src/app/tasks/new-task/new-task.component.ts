import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TaskService } from '../task/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  @Output() close = new EventEmitter();
  @Output() add = new EventEmitter<NewTaskData>();
  @Input({ required: true }) userId!: string;

  enteredTitle = signal('')
  enteredSummary = signal('')
  enteredDate = signal('')
  private tasksService = inject(TaskService);


  onCancel(){
    this.close.emit()
  }

  onSubmit(){
    this.tasksService.addTask({
      title: this.enteredTitle(),
      summary: this.enteredSummary(),
      date: this.enteredDate(),
    },this.userId)

    this.close.emit();
  }
}
