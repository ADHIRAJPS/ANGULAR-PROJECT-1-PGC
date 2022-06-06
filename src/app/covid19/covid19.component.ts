import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../services/covid19.service';

@Component({
  selector: 'app-covid19',
  templateUrl: './covid19.component.html',
  styleUrls: ['./covid19.component.scss']
})
export class Covid19Component implements OnInit {

  
  constructor(private covidService: Covid19Service) {
    this.covidService.getCoviddata().subscribe(data => {
      console.log("covid data = ",data);
    }, err => {
      console.log("error covid")});
   }

  ngOnInit(): void {
  }

  


}
