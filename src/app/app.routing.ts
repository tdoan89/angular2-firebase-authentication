import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';

import { AuthGuard } from './auth';
import { HomePage } from './home/home.page';


const APP_ROUTES: Route[] = [
    { path: '', component: HomePage, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
