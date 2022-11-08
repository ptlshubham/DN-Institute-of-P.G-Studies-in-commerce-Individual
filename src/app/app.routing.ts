import { Routes } from '@angular/router';


export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'main/home',
        pathMatch: 'full',
    },
    {
        path: 'anpatel',
        loadChildren: () => import('./anpatel/anpatel.module').then(m => m.AnpatelModule)
    },
    {
        path: 'basic',
        loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule)
    },


];
