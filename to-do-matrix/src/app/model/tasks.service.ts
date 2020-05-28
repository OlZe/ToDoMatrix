import { Task } from './task.model';
import { Injectable } from '@angular/core';
import { NewTask } from './new-task.model';


const TASK_KEY = 'tasks';

@Injectable()
export class TasksService {
    private tasks: Task[];

    constructor() {
        this.loadTasksFromLocalStorage();
        window.onstorage = (e: StorageEvent) => {
            this.loadTasksFromLocalStorage();
        };
    }

    public getTasks(): Task[] {
        return this.tasks;
    }

    public getTask(id: number): Task {
        return this.tasks.find(t => t.id === id);
    }

    public addTask(newTask: NewTask) {
        const id = this.getNextId();
        this.tasks.push({ id, ...newTask });
        this.saveTasksToLocalStorage();
    }

    public deleteTask(id: number) {
        const taskIndex = this.tasks.findIndex(t => t.id === id);
        this.tasks.splice(taskIndex, 1);
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

    private getNextId(): number {
        let id: number;
        for (id = 0; this.getTask(id); id++) { }
        return id;
    }
}
