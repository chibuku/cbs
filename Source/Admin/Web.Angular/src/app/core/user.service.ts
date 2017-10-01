import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { User } from '../shared/models/index';

@Injectable()
export class UserService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getProjectOwners(nationalSocietyId: number): Promise<Array<User>> {
        return this.http
            .get('/api/user', { headers: this.headers })
            .toPromise()
            .then((result) => { return result.json(); })
            .catch((error) => console.error(error));
    }
}