import { ROUTE_PATHS } from '../app-paths.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PATH_DEFINITIONS } from '../app-paths.model';
import { NewTask } from '../model/new-task.model';
import { TasksService } from '../model/tasks.service';
import { Task } from '../model/task.model';
import { TitlebarService } from '../model/titlebar.service';
import { MessageService } from '../model/message.service';

@Component({
    templateUrl: './edit-task.component.html'
})
export class EditTaskComponent {
    public creatingNewTask: boolean;
    public task: NewTask;
    public PATHS = ROUTE_PATHS;

    public constructor(
        private tasksService: TasksService,
        private messageService: MessageService,
        route: ActivatedRoute, titlebarService: TitlebarService) {
        this.creatingNewTask = route.snapshot.routeConfig.path === PATH_DEFINITIONS.CREATE_TASK;
        titlebarService.setTitlebarText(this.creatingNewTask ? 'Create new task' : 'Edit task');
        const possibleId: number = Number.parseInt(route.snapshot.paramMap.get(PATH_DEFINITIONS.EDIT_TASK_ID_KEY), 10);
        this.task = this.prepareTaskObject(possibleId);
    }

    public save() {
        if (this.canSave()) {
            if (this.creatingNewTask) {
                this.saveNewTask();
            }
            else {
                this.saveEditedTask();
            }
        }
    }

    public getImportanceText(): string {
        return this.tasksService.getTextRepresentationForImportance(this.task.importance);
    }

    public getUrgencyText(): string {
        return this.tasksService.getTextRepresentationForUrgency(this.task.urgency);
    }

    public canSave(): boolean {
        return !!this.task.title;
    }

    public onDragMatrix(event: { importance: number, urgency: number }) {
        this.task.importance = event.importance;
        this.task.urgency = event.urgency;
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

    private saveEditedTask() {
        const editedTask = this.task as Task;
        const taskBeforeSave = this.tasksService.getTaskCopy(editedTask.id);
        const undoFn = () => this.tasksService.saveEditedTask(taskBeforeSave);
        this.tasksService.saveEditedTask(this.task as Task);
        this.messageService.displayMessageWithUndoAction('Changes saved', 'Changes undone', undoFn);
    }

    private saveNewTask() {
        const id = this.tasksService.addTask(this.task);
        const undoFn = () => this.tasksService.deleteTask(id);
        this.messageService.displayMessageWithUndoAction('New task created', 'New task removed', undoFn);
    }
}
