import { Routes } from '@angular/router';

export const AnPatelRoutes: Routes = [{
    path: '',
    redirectTo: 'anhome/anmain/',
    pathMatch: 'full',
},


{
    path: 'course',
    loadChildren: () => import('./ancourse/ancourse.module').then(m => m.AncourseModule)
},


{
    path: 'more',
    loadChildren: () => import('./anmore/anmore.module').then(m => m.AnmoreModule)
},

];
