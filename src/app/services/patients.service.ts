import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class PatientsService {

  //service to fetch patients data to be rendered on medical support page
  // api = 'https://api.projectglobalcure.org/stories/earch/v1?limit=6&pageno=1&status=published';
  
  constructor(
    private http: HttpClient,
    public router: Router
  ) { }

  header = new HttpHeaders({'Authorization': 'Service qrgUGrVfzKnl7dEAmwR6LLbprbuuqtzm'});

  url= 'https://api.projectglobalcure.org/healthtopics/list/v1';
  /**
 * Send XHR to specified URL with data
 * @param method - GET, PUT, POST etc.
 * @param url - Full url to acccess
 * @param data - Payload to send (if not a string, it is coverted to JSON)
 * @param headers - Object containing any headers to be sent
 * @param anonymous - is anonymous [without auth token]? (default- false)
 * @return Observable
 */

  getPatients(): Observable<any>{
    return this.http.get(this.url ,{ headers: this.header});
  }
}

  // , {headers:new HttpHeaders().set('Authorization', 'Service qrgUGrVfzKnl7dEAmwR6LLbprbuuqtzm')}





















  // public sendRequest(
  //   method: string,
  //   url: string,
  //   data: any = '',
  //   headers: any = {},
  //   anonymous: boolean = false
  // ) {
  //   if (anonymous) {
  //     return this.processRequest(method, url, data, headers, anonymous);
  //   }


  // };

  // private processRequest(
  //   method: string,
  //   url: string,
  //   data: any,
  //   headers: any,
  //   anonymous: boolean
  // ): Promise<any> {
  //   let req: any;

  //   return new Promise<any>((resolve, reject) => {
  //     if (typeof url !== 'string') {
  //       reject({
  //         title: '',
  //         detail: 'app.http: sendRequest fail : URL not specified'
  //       });
  //     }

  //     // headers and data can be empty but provide defaults   
  //     headers = headers || {};

  //     if (typeof data === 'string') {
  //       data = data || '';
  //     }
  //     else {
  //       data = JSON.stringify(data);
  //     }

  //     req = new XMLHttpRequest();
  //     req.open(method, url, true);

  //     //* set any requested headers by iterating the headers object */
  //     for (let key in headers) {
  //       if (headers.hasOwnProperty(key)) {
  //         req.setRequestHeader(key, headers[key]);
  //       }
  //     }

  //     //adding Bearer tokens.
  //     req.setRequestHeader('Content-Type', 'application/json');

  //     req.onload = () => {
  //       resolve(req);
  //     };

  //     /* set up onerror handler */
  //     req.onerror = () => {
  //       reject(req);
  //     };

  //     req.send(data);

  //   })
  // }
