import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifesaved',
  templateUrl: './lifesaved.component.html',
  styleUrls: ['./lifesaved.component.scss']
})
export class LifesavedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  lifesaved = [
    {
      detail: '22-Year-Old Furkan Is Outcasted From Society, Help Before He Kills Himself.',
      info: "22-year-old Furkan is suffering from Neurofibromatosis. It is a congenitadisorder that causes tumours to develop on nerve tissue. They can develop anywhere,."
    },
    {
      detail: '22-Year-Old Furkan Is Outcasted From Society, Help Before He Kills Himself.',
      info: "22-year-old Furkan is suffering from Neurofibromatosis. It is a congenitadisorder that causes tumours to develop on nerve tissue. They can develop anywhere,."
    },
    {
      detail: '22-Year-Old Furkan Is Outcasted From Society, Help Before He Kills Himself.',
      info: "22-year-old Furkan is suffering from Neurofibromatosis. It is a congenitadisorder that causes tumours to develop on nerve tissue. They can develop anywhere,."
    }
  ]

}
