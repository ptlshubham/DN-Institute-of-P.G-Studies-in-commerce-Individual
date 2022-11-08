import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnsharedModule } from './anshared/anshared.module';
import { RouterModule } from '@angular/router';
import { AnPatelRoutes } from './anpatel.routing';
import { AncourseModule } from './ancourse/ancourse.module';
import { AninfrastructureModule } from './aninfrastructure/aninfrastructure.module';
import { AnmoreModule } from './anmore/anmore.module';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AnsharedModule,
    // AnhomeModule,
    AncourseModule,
    AninfrastructureModule,
    AnmoreModule,
    RouterModule.forChild(AnPatelRoutes)
  ]
})
export class AnpatelModule { }
