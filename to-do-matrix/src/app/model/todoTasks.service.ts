import { TodoTask } from './todoTask.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoTasksService {
    private todoTasks: TodoTask[] = [
        { title: 'task1' },
        { title: 'task2' },
        { title: 'task3' },
        { title: 'task4' }
    ];

    public getTodoTasks(): TodoTask[] {
        return this.todoTasks;
    }
}
