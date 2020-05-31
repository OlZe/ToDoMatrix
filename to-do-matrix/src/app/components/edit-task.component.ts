import { ROUTE_PATHS } from '../app-paths.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PATH_DEFINITIONS } from '../app-paths.model';
import { NewTask } from '../model/new-task.model';
import { TasksService } from '../model/tasks.service';
import { Task } from '../model/task.model';

@Component({
    templateUrl: './edit-task.component.html'
})
export class EditTaskComponent {
    public creatingNewTask: boolean;
    public task: NewTask;
    public PATHS = ROUTE_PATHS;

    constructor(private tasksService: TasksService, route: ActivatedRoute) {
        this.creatingNewTask = route.snapshot.routeConfig.path === PATH_DEFINITIONS.CREATE_TASK;
        const possibleId: number = Number.parseInt(route.snapshot.paramMap.get(PATH_DEFINITIONS.EDIT_TASK_ID_KEY), 10);
        this.task = this.prepareTaskObject(possibleId);
    }

    public save() {
        if (this.creatingNewTask) {
            if (this.task.title) {
                this.tasksService.addTask(this.task);
            }
        }
        else {
            this.tasksService.saveEditedTask(this.task as Task);
        }
    }

    private prepareTaskObject(id?: number): NewTask {
        let task: NewTask;
        if (this.creatingNewTask) {
            task = new NewTask();
        }
        else {
            task = this.tasksService.getTaskCopy(id);
        }
        return task;
    }
}
