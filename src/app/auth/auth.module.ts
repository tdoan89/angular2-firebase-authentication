import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppSharedModule } from '../shared';

import { AuthService } from './auth.service';
import { ReversedAuthGuard, AuthGuard } from './auth.guard';

import { AuthPage } from './auth.page';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';

const ROUTES: Route[] = [
    {
        path: 'auth',
        component: AuthPage,
        canActivate: [ReversedAuthGuard],
        children: [
            { path: 'login', component: LoginComponent },
            { path: '', component: LandingComponent },
        ]
    }
];

@NgModule({
    declarations: [
        LandingComponent,
        LoginComponent
    ],
    imports: [
        AppSharedModule,
        RouterModule.forChild(ROUTES)
    ],
    providers: [
        AuthService,
        AuthGuard,
        ReversedAuthGuard
    ]
})
export class AuthModule { }