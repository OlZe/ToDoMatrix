import { Task } from './task.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        { title: 'task1' },
        { title: 'task2' },
        { title: 'task3' },
        { title: 'task4' }
    ];

    public getTasks(): Task[] {
        return this.tasks;
    }

    public addTask(task: Task) {
        this.tasks.push(task);
    }
}
