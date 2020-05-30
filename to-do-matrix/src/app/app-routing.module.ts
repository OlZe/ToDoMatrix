import { PATH_DEFINITIONS } from './app-paths.model';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview.component';
import { EditTaskComponent } from './components/edit-task.component';
import { TaskExistsGuard } from './model/task-exists.guard';

const routes: Routes = [
    { path: PATH_DEFINITIONS.OVERVIEW, component: OverviewComponent },
    { path: PATH_DEFINITIONS.CREATE_TASK, component: EditTaskComponent },
    { path: PATH_DEFINITIONS.EDIT_TASK, component: EditTaskComponent, canActivate: [TaskExistsGuard] },
    { path: '**', redirectTo: PATH_DEFINITIONS.OVERVIEW }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
