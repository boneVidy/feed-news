import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MainRoutingModule} from './main.routing';
import {MainComponent} from './main.component';
import {MainListComponent} from './main-list/main-list.component';
import {MainDetailComponent} from './main-detail/main-detail.component';
import {MainMenuComponent} from './main-menu/main-menu.component';
@NgModule({
  imports: [
    CommonModule,
    NgModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    MainListComponent,
    MainDetailComponent,
    MainMenuComponent,
  ],
  exports: [MainComponent]
})
export class MainModule { }
