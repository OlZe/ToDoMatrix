import { Component, Input, OnChanges } from '@angular/core';
import { Task } from '../model/task.model';
import { TasksService } from '../model/tasks.service';

@Component({
    selector: 'app-task-card',
    templateUrl: './task-card.component.html'
})
export class TaskCardComponent {

    @Input() public task: Task;

    public constructor(private tasksService: TasksService) { }

    public deleteThisTask() {
        this.tasksService.deleteTask(this.task.id);
    }

}
