import { Component, Input } from '@angular/core';
import { Task } from '../model/task.model';
import { TasksService } from '../model/tasks.service';
import { ROUTE_PATHS } from '../app-paths.model';

@Component({
    selector: 'app-task-card',
    templateUrl: './task-card.component.html'
})
export class TaskCardComponent {

    @Input() public task: Task;
    public PATHS = ROUTE_PATHS;

    public constructor(private tasksService: TasksService) { }

    public deleteThisTask() {
        this.tasksService.deleteTask(this.task.id);
    }

}
