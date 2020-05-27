import { Task } from './task.model';
import { Injectable } from '@angular/core';


const TASK_KEY = 'tasks';

@Injectable()
export class TasksService {
    private tasks: Task[] = [
        { title: 'task1' },
        { title: 'task2' },
        { title: 'task3' },
        { title: 'task4' }
    ];

    constructor() {
        this.loadTasksFromLocalStorage();
        window.onstorage = (e: StorageEvent) => {
            this.loadTasksFromLocalStorage();
        };
    }

    public getTasks(): Task[] {
        return this.tasks;
    }

    public addTask(task: Task) {
        this.tasks.push(task);
        this.saveTasksToLocalStorage();
    }

    private loadTasksFromLocalStorage() {
        try {
            this.tasks = JSON.parse(localStorage.getItem(TASK_KEY)) ?? [];
        } catch (error) {
            this.tasks = [];
            console.error('Cannot load saved todo items from local storage as data is corrupted!');
        }
    }

    private saveTasksToLocalStorage() {
        localStorage.setItem(TASK_KEY, JSON.stringify(this.tasks));
    }
}
