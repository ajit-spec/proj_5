import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "./modules/shared/shared.module";
import { ListComponent } from './components/app-module/list/list.component';
import { AddListComponent } from './components/app-module/add-list/add-list.component';
import { AddTaskComponent } from './components/app-module/add-task/add-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddListComponent,
    AddTaskComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
