import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './components/overview.component';
import { EditTaskComponent } from './components/edit-task.component';
import { TaskExistsGuard } from './model/task-exists.guard';

const routes: Routes = [
    { path: 'overview', component: OverviewComponent },
    { path: ':id', component: EditTaskComponent, canActivate: [TaskExistsGuard] },
    { path: '**', redirectTo: 'overview' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
