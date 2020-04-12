import { Branches } from './questions-classes';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = 'http://api.qb.com/';
  constructor(private httpClient: HttpClient) { }
}
