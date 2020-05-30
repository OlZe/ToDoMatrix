import { ROUTE_PATHS } from '../app-paths.model';
import { CanActivate, ActivatedRouteSnapshot, Router, UrlTree } from '@angular/router';
import { TasksService } from './tasks.service';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskExistsGuard implements CanActivate {

    public constructor(
        private tasksService: TasksService,
        private router: Router) { }

    public canActivate(route: ActivatedRouteSnapshot): boolean | UrlTree {
        const id = Number.parseInt(route.paramMap.get('id'), 10);
        const canActivate = !!this.tasksService.getTask(id);
        return canActivate ? true : this.redirectToOverview();
    }

    private redirectToOverview(): UrlTree {
        return this.router.parseUrl(ROUTE_PATHS.OVERVIEW());
    }

}
