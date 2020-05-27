import { Component } from '@angular/core';
import { Task } from '../model/task.model';
import { TasksService } from '../model/tasks.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html'
})
export class TaskListComponent {

    public constructor(private tasksService: TasksService) { }

    public getTasks(): Task[] {
        return this.tasksService.getTasks();
    }
}
