import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

class LoginUser {
    Username: string;
    Password: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    user = new LoginUser();
    error: string;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    login() {
        this.error = void 0;
        this.authService.signIn(
            this.user.Username,
            this.user.Password,
            (user) => { // on success
                this.router.navigate(['']);
            },
            (error) => { // on failure
                const error_map = {
                    'auth/argument-error': 'Both email and password are required',
                    'auth/invalid-email': 'Invalid email address.',
                    'auth/user-disabled': 'This account has been disabled. Contact admin for details.',
                    'auth/user-not-found': 'This user has not registered. Register now or contact admin for details.',
                    'auth/wrong-password': 'This combination of email and password is invalid'
                };
                this.error = error_map[error.code];
            }
        );
    }
}
