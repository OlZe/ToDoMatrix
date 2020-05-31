import { Component } from '@angular/core';
import { TitlebarService } from '../model/titlebar.service';
import { TasksService } from '../model/tasks.service';
import { Task } from '../model/task.model';

@Component({
    templateUrl: './overview.component.html'
})
export class OverviewComponent {

    public constructor(private tasksService: TasksService, titlebarService: TitlebarService) {
        titlebarService.setTitlebarText('Overview');
    }

    public getTasks(): Task[] {
        return this.tasksService.getTasks();
    }
}
