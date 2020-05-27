import { Component } from '@angular/core';
import { TodoTask } from '../model/todoTask.model';
import { TodoTasksService } from '../model/todoTasks.service';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html'
})
export class TodoListComponent {
    public todoTasks: TodoTask[];

    public constructor() {
        this.todoTasks = new TodoTasksService().getTodoTasks();
    }
}
