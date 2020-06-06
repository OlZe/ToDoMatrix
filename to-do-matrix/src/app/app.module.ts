import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TaskCardComponent } from './components/task-card.component';
import { TaskListComponent } from './components/task-list.component';
import { TasksService } from './model/tasks.service';
import { CreateTaskButtonComponent } from './components/create-task-button.component';
import { FormsModule } from '@angular/forms';
import { EisenhowerMatrixComponent } from './components/eisenhower-matrix.component';
import { AppRoutingModule } from './app-routing.module';
import { OverviewComponent } from './components/overview.component';
import { EditTaskComponent } from './components/edit-task.component';
import { TaskExistsGuard } from './model/task-exists.guard';
import { TitlebarService } from './model/titlebar.service';
import { MessageService } from './model/message.service';
import { TitlebarComponent } from './components/titlebar-component';

@NgModule({
  declarations: [
    AppComponent,
    TitlebarComponent,
    OverviewComponent,
    EditTaskComponent,
    TaskListComponent,
    TaskCardComponent,
    CreateTaskButtonComponent,
    EisenhowerMatrixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatTooltipModule,
    AppRoutingModule
  ],
  providers: [
    TasksService,
    TaskExistsGuard,
    TitlebarService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
