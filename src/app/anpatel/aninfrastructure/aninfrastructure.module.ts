import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AnInfrastructureRoutes } from './aninfrastructure.routing';
import { AnsharedModule } from '../anshared/anshared.module';
import { AnInfraComponent } from './an-infra/an-infra.component';



@NgModule({
  declarations: [
    AnInfraComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AnInfrastructureRoutes),
    // AnhomeModule,
    AnsharedModule
  ]
})
export class AninfrastructureModule { }
