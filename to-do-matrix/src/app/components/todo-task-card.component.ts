import { Component, Input } from '@angular/core';
import { TodoTask } from '../model/todoTask.model';

@Component({
    selector: 'app-todo-task-card',
    templateUrl: './todo-task-card.component.html'
})
export class TodoTaskCardComponent {

    @Input()
    public todoTask: TodoTask;
}
