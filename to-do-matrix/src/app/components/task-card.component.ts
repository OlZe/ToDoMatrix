import { Component, Input } from '@angular/core';
import { Task } from '../model/task.model';

@Component({
    selector: 'app-task-card',
    templateUrl: './task-card.component.html'
})
export class TaskCardComponent {

    @Input()
    public task: Task;
}
