import { Injectable } from '@angular/core';

import * as firebase from 'firebase';
import { environment } from '../../environments/environment';
import 'rxjs/operator/toPromise';
import { reject } from 'q';

@Injectable()
export class AuthService {
    firebaseAuth: firebase.auth.Auth;

    constructor() {
        console.log('Auth Service Starting!');
        firebase.initializeApp(environment.firebaseConfig);
        this.firebaseAuth = firebase.auth();
    }

    signIn(
        username: string,
        password: string,
        onSuccess: (userCred: firebase.auth.UserCredential) => any,
        onFailure: (error: firebase.auth.Error) => any
    ): void {
        try {
            this.firebaseAuth.signInAndRetrieveDataWithEmailAndPassword(username, password)
                .then(userCred => onSuccess(userCred))
                .catch(error => onFailure(error));
        } catch (error) {
            onFailure(error);
        }
    }

    isSignedIn() {
        return this.firebaseAuth.currentUser !== null;
    }

    getCurrentUser(): Promise<firebase.User> {
        return new Promise((res, rej) => {
            this.firebaseAuth.onAuthStateChanged((user: firebase.User) => {
                res(user);
            });
        });
    }

    signOut() {
        return this.firebaseAuth.signOut();
    }
}
