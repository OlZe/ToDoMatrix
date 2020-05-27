import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskDialogComponent } from './create-task-dialog.component';
import { TodoTasksService } from '../model/todoTasks.service';

@Component({
    selector: 'app-create-task-button',
    templateUrl: './create-task-button.component.html'
})
export class CreateTaskButtonComponent {

    constructor(
        private createTaskDialog: MatDialog,
        private todoTasksService: TodoTasksService) { }

    public createNewTask() {
        const dialogHandle = this.createTaskDialog.open(CreateTaskDialogComponent);
        dialogHandle.afterClosed().subscribe(title => {
            if (title) {
                this.todoTasksService.addTodoTask({ title });
            }
        });
    }
}
