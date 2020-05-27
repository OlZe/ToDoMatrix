import { TodoTask } from './todoTask.model';

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