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
    path: 'department',
    loadChildren: () => import('./andepartment/andepartment.module').then(m => m.AndepartmentModule)
},
{
    path: 'more',
    loadChildren: () => import('./anmore/anmore.module').then(m => m.AnmoreModule)
},
{
    path: 'gallery',
    loadChildren: () => import('./angallery/angallery.module').then(m => m.AngalleryModule)
},
];
