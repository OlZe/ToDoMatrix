import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './edit-task.component.html'
})
export class EditTaskComponent{
    public id: number;

    constructor(route: ActivatedRoute) {
        this.id = Number.parseInt(route.snapshot.paramMap.get('id'), 10);
    }
}
