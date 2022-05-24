import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personinfo',
  templateUrl: './personinfo.component.html',
  styleUrls: ['./personinfo.component.scss']
})
export class PersoninfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  persondetails = [
    {
      
      heading: '22-Year-Old Furkan Is Outcasted From Society, Help Before He Kills Himself.',
      info: '22-year-old Furkan is suffering from Neurofibromatosis. It is a congenital disorder that causes tumours to develop on nerve tissue. They can develop anywhere,.'
    },
    {
      heading: '22-Year-Old Furkan Is Outcasted From Society, Help Before He Kills Himself.',
      info: '22-year-old Furkan is suffering from Neurofibromatosis. It is a congenital disorder that causes tumours to develop on nerve tissue. They can develop anywhere,.'
    },
    {
      heading: '22-Year-Old Furkan Is Outcasted From Society, Help Before He Kills Himself.',
      info: '22-year-old Furkan is suffering from Neurofibromatosis. It is a congenital disorder that causes tumours to develop on nerve tissue. They can develop anywhere,.'
    },
    {
      heading: '22-Year-Old Furkan Is Outcasted From Society, Help Before He Kills Himself.',
      info: '22-year-old Furkan is suffering from Neurofibromatosis. It is a congenital disorder that causes tumours to develop on nerve tissue. They can develop anywhere,.'
    }

  ]

}
