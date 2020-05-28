import { Component } from '@angular/core';
import { NewTask } from '../model/new-task.model';

@Component({
    templateUrl: './create-task-dialog.component.html'
})
export class CreateTaskDialogComponent {
    public task: NewTask = new NewTask();
}
