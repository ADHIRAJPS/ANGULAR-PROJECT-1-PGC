import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../services/patients.service';

@Component({
  selector: 'app-medicalsupport',
  templateUrl: './medicalsupport.component.html',
  styleUrls: ['./medicalsupport.component.scss']
})
export class MedicalsupportComponent implements OnInit {


  patients: Array<{}> = [];
  provider: any;
  item: any;
  
  
  constructor(public patientService: PatientsService) {
    this.patientService.getPatients().subscribe(
      (data) => {
        this.patients = data.data[0].attributes.list.list;
        // this.patients = data;
        console.log("data = ", data);
        console.log("patients = ",this.patients);  
        this.patients.forEach((i: any)=>{
          console.log(i);
        })
      },
      (err)=>{
        console.log("error = ",err);
      }
    )
    }
    
  ngOnInit(): void {
  }




}
