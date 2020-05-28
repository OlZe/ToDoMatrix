import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from './create-task-dialog.component';
import { TasksService } from '../model/tasks.service';

@Component({
    selector: 'app-create-task-button',
    templateUrl: './create-task-button.component.html'
})
export class CreateTaskButtonComponent {

    constructor(
        private createTaskDialog: MatDialog,
        private tasksService: TasksService) { }

    public createNewTask() {
        const dialogHandle = this.createTaskDialog.open(CreateTaskDialogComponent);
        dialogHandle.afterClosed().subscribe(title => {
            if (title) {
                this.tasksService.addTask(title);
            }
        });
    }
}
