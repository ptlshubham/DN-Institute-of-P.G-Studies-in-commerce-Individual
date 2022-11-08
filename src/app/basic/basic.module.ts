import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { CommitteeComponent } from './committee/committee.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TrustComponent } from './trust/trust.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { BasicRoutes } from './basic.routing';



@NgModule({
  declarations: [
    AboutComponent,
    CommitteeComponent,
    ContactComponent,
    GalleryComponent,
    TrustComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(BasicRoutes)

  ]
})
export class BasicModule { }
