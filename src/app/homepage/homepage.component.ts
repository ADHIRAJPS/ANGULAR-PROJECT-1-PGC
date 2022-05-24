import { Component, OnInit } from '@angular/core';
import { PersoninfoComponent } from '../components/personinfo/personinfo.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  news=[
    "one news is this ...",
    "second news is this....",
    "third news is this...."
  ];

  medicalcases=[
    {name:"Adhiraj",age:21}
    
  ]
}
