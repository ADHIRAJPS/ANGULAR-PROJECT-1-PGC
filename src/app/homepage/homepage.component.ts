import { Component, OnInit } from '@angular/core';
import { PersoninfoComponent } from '../components/personinfo/personinfo.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  pink="background: rgb(251, 246, 246)";
  newspresent = "let news in news"? true:false;
  nonewstoday = "let news in news"? false:true;

  constructor() { }

  ngOnInit(): void {
  }

  news=[
    "one news is this ...",
    // "second news is this....",
    // "third news is this...."
  ];

  medicalcases=[
    {name:"Adhiraj",age:21}
    
  ]
}
