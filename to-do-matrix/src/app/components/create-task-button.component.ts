import { ROUTE_PATHS } from '../app-paths.model';
import { Component } from '@angular/core';

@Component({
    selector: 'app-create-task-button',
    templateUrl: './create-task-button.component.html'
})
export class CreateTaskButtonComponent {

    public PATHS = ROUTE_PATHS;
}
