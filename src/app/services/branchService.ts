import { Branch } from './../questions-classes';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';


const baseUrl = 'http://qb.local/branches';

@Injectable({
    providedIn: 'root'
})
export class BranchService {

    constructor(private http: HttpClient) { }

    getAll(): Observable<Branch[]> {
        let branches = [];
        let resData = this.http.get(baseUrl).pipe(
            mergeMap((result: any) =>
                from(result.data).pipe(
                    map((branch: any) => {
                        branches.push(new Branch(branch.id, branch.name, branch.full_name));
                        return branches;
                    }))
            )
        );
        return resData;
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    get(id) {
        return this.http.get(`${baseUrl}/${id}`);
    }

    create(data: Branch): Observable<Branch> {
        return this.http.post<Branch>(baseUrl, data).pipe(
            catchError(this.handleError('addBranch', data))
        );
    }

    update(id, data) {
        return this.http.put(`${baseUrl}/${id}`, data);
    }

    delete(id) {
        return this.http.delete(`${baseUrl}/${id}`);
    }

    deleteAll() {
        return this.http.delete(baseUrl);
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}