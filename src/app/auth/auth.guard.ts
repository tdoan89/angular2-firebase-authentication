import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate() {
        return Observable.create(observer => {
            this.authService.getCurrentUser().then(user => {
                user !== null ? (
                    observer.next(true)
                ) : (
                    this.router.navigate(['auth']),
                    observer.next(false)
                );
            });
        });
    }
}

@Injectable()
export class ReversedAuthGuard implements CanActivate {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate() {
        return Observable.create(observer => {
            this.authService.getCurrentUser().then(user => {
                user === null ? (
                    observer.next(true)
                ) : (
                    this.router.navigate(['']),
                    observer.next(false)
                );
            });
        });
    }
}
