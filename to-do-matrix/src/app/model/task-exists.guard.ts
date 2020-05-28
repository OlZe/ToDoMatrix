import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { TasksService } from './tasks.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskExistsGuard implements CanActivate {

    public constructor(
        private tasksService: TasksService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id = Number.parseInt(route.paramMap.get('id'), 10);
        const canActivate = !!this.tasksService.getTask(id);
        if (!canActivate) {
            this.router.navigateByUrl('overview');
        }
        return canActivate;
    }

}
