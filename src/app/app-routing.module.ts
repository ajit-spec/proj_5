import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./components/app-module/list/list.component";
import {AddListComponent} from "./components/app-module/add-list/add-list.component";
import {AddTaskComponent} from "./components/app-module/add-task/add-task.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lists',
    pathMatch: 'full'
  },
  {
    path: 'lists',
    component: ListComponent
  },
  {
    path: 'add-list',
    component: AddListComponent
  },
  {
    path: 'add-task',
    component: AddTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
