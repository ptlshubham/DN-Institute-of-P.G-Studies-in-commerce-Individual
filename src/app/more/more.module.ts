import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';
import { MoreRoutes } from './more.routing';
import { SharedModule } from '../shared/shared.module';
import { LibraryComponent } from './library/library.component';
import { ResultComponent } from './result/result.component';



@NgModule({
  declarations: [
    LibraryComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MoreRoutes),
    HomeModule,
    SharedModule
  ]
})
export class MoreModule { }
