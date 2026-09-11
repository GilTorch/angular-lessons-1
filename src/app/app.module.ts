import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { TasksComponent } from './tasks/tasks.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './tasks/task/task.component';
import { DatePipe, NgFor, NgIf } from '@angular/common';
import { NewTaskComponent } from './tasks/new-task/new-task.component';
import { CardComponent } from './shared/card/card.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    declarations: [AppComponent,UserComponent, HeaderComponent],
    imports: [BrowserModule,TasksModule, SharedModule],
    bootstrap: [AppComponent],
})
export class AppModule {

}