import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth';
import { Router } from '@angular/router';

@Component({
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
    title = 'Angular2+ Firebase Authentication';
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    ngOnInit(): void { }

    signOut() {
        this.authService.signOut();
        this.router.navigate(['auth']);
    }
}
