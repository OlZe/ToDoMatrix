import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TodoTaskCardComponent } from './components/todo-task-card.component';
import { TodoListComponent } from './components/todo-list.component';
import { TodoTasksService } from './model/todoTasks.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoTaskCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FlexLayoutModule,
    MatCardModule
  ],
  providers: [
    TodoTasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
