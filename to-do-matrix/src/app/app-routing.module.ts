import { PATHS } from './app-paths.model';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview.component';
import { EditTaskComponent } from './components/edit-task.component';
import { TaskExistsGuard } from './model/task-exists.guard';

const routes: Routes = [
    { path: PATHS.OVERVIEW(), component: OverviewComponent },
    { path: PATHS.CREATE_TASK(), component: EditTaskComponent },
    { path: PATHS.EDIT_TASK(':id'), component: EditTaskComponent, canActivate: [TaskExistsGuard] },
    { path: '**', redirectTo: PATHS.OVERVIEW() }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
