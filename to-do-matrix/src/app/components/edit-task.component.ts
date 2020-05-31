import { ROUTE_PATHS } from '../app-paths.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PATH_DEFINITIONS } from '../app-paths.model';
import { NewTask } from '../model/new-task.model';
import { TasksService } from '../model/tasks.service';
import { Task } from '../model/task.model';
import { TitlebarService } from '../model/titlebar.service';

@Component({
    templateUrl: './edit-task.component.html'
})
export class EditTaskComponent {
    public creatingNewTask: boolean;
    public task: NewTask;
    public isDragging = false;
    public PATHS = ROUTE_PATHS;

    constructor(private tasksService: TasksService, route: ActivatedRoute, titlebarService: TitlebarService) {
        this.creatingNewTask = route.snapshot.routeConfig.path === PATH_DEFINITIONS.CREATE_TASK;
        titlebarService.setTitlebarText(this.creatingNewTask ? 'Create new task' : 'Edit task');
        const possibleId: number = Number.parseInt(route.snapshot.paramMap.get(PATH_DEFINITIONS.EDIT_TASK_ID_KEY), 10);
        this.task = this.prepareTaskObject(possibleId);
    }

    public save() {
        if (this.canSave()) {
            if (this.creatingNewTask) {
                this.tasksService.addTask(this.task);
            }
            else {
                this.tasksService.saveEditedTask(this.task as Task);
            }
        }
    }

    public canSave(): boolean {
        return !!this.task.title;
    }

    public getXForTask(): number {
        // Scale 0-100 to 3-98
        return ((this.task.urgency / 100) * 95) + 3;
    }

    public getYForTask(): number {
        // Scale 0-100 to 2-65
        const importance = 100 - this.task.importance; // negate because higher importance is a lower Y-value
        return ((importance / 100) * 63) + 2;
    }

    public onMousedown(event: MouseEvent) {
        window.addEventListener('mouseup', this.onMouseup);
        this.isDragging = true;
        this.drag(event);
    }

    public onMousemove(event: MouseEvent) {
        if (this.isDragging) {
            this.drag(event);
        }
    }

    public onMouseup = (event: MouseEvent) => {
        window.removeEventListener('mouseup', this.onMouseup);
        this.isDragging = false;
    }

    private drag(event: MouseEvent) {
        const target: SVGRectElement = event.target as SVGRectElement;
        const dimensions = target.getBoundingClientRect();
        const width = dimensions.width;
        const height = dimensions.height;
        const x = event.clientX - dimensions.left;
        const y = event.clientY - dimensions.top;

        // Scale (0 - width) to (0 - 100)
        const newUrgency = Math.round((x / width) * 100);
        // Scale (0 - height) to (0 - 100)
        const invertedY = height - y;
        const newImportance = Math.round((invertedY / height) * 100);
        this.task.importance = newImportance;
        this.task.urgency = newUrgency;
    }

    private prepareTaskObject(id?: number): NewTask {
        let task: NewTask;
        if (this.creatingNewTask) {
            task = new NewTask();
            task.importance = 50;
            task.urgency = 50;
        }
        else {
            task = this.tasksService.getTaskCopy(id);
        }
        return task;
    }
}
