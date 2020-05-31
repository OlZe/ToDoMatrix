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
        return this.tasksService.getTasks().sort(this.sortByPriorityDescending);
    }

    // Variable instead of function because it needs to be passed as argument
    private sortByPriorityDescending = (a: Task, b: Task) => this.calcPriorityScore(b) - this.calcPriorityScore(a);

    private calcPriorityScore(task: Task): number {
        return task.urgency * 2 + task.importance;
    }
}
