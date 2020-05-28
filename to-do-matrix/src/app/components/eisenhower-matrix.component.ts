import { Component } from '@angular/core';
import { TasksService } from '../model/tasks.service';
import { Task } from '../model/task.model';

@Component({
    selector: 'app-eisenhower-matrix',
    templateUrl: './eisenhower-matrix.component.html'
})
export class EisenhowerMatrixComponent {
    public constructor(private tasksService: TasksService) { }

    public getTasks(): Task[] {
        return this.tasksService.getTasks();
    }

    public getXForTask(task: Task): number {
        // Scale 0-100 to 3-98
        return ((task.importance / 100) * 95) + 3;
    }

    public getYForTask(task: Task): number {
        // Scale 0-100 to 2-65
        const urgency = 100 - task.urgency; // negate because higher urgency is a lower Y-value
        return ((urgency / 100) * 63) + 2;
    }
}
