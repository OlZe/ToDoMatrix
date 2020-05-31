import { Component, Input, OnChanges } from '@angular/core';
import { Task } from '../model/task.model';
import { TasksService } from '../model/tasks.service';
import { ROUTE_PATHS } from '../app-paths.model';

@Component({
    selector: 'app-task-card',
    templateUrl: './task-card.component.html'
})
export class TaskCardComponent implements OnChanges {

    @Input() public task: Task;
    public importanceText: string;
    public urgencyText: string;
    public PATHS = ROUTE_PATHS;

    public constructor(private tasksService: TasksService) { }

    public ngOnChanges() {
        this.importanceText = this.tasksService.getTextRepresentationForImportance(this.task.importance);
        this.urgencyText = this.tasksService.getTextRepresentationForUrgency(this.task.urgency);
    }

    public deleteThisTask() {
        this.tasksService.deleteTask(this.task.id);
    }

}
