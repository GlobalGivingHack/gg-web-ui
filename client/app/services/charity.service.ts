import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class CharityService {

  private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getDonorEvents(): Observable<any> {
    return this.http.get('http://globalgivinghack.us-west-1.elasticbeanstalk.com/api/donorEvent').map(res => res.json());
  }

}
