import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class Covid19Service {


  constructor(private http: HttpClient ) { }

  // url = 'https://covid19india.p.rapidapi.com/getStateData/TN';

  url = 'http://localhost:5000/login';

  // headers = new HttpHeaders({'X-RapidAPI-Host': 'covid19india.p.rapidapi.com',
  // 'X-RapidAPI-Key': '3483223427msh5852db6b1b70773p13ddecjsn4fce3db95c95'});

  getCoviddata(): Observable<any>{
    return this.http.get(this.url);
  }
}
