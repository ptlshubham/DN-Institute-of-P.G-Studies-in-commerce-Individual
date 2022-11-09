import { Routes } from '@angular/router';
import { LibraryComponent } from './library/library.component';
import { ResultComponent } from './result/result.component';

export const MoreRoutes: Routes = [{
    path: '',
    children: [
        {
            path: 'library',
            component: LibraryComponent
        },
        {
            path: 'result',
            component: ResultComponent
        }

]
}];