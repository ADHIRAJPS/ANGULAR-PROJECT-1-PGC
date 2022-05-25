import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teammembers',
  templateUrl: './teammembers.component.html',
  styleUrls: ['./teammembers.component.scss']
})
export class TeammembersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  teammembers=[
    {
      imgUrl: "https://www.projectglobalcure.org/assets/images/About-us/uditamam.jpg",
      name: 'Ms. Udaita Saikia',
      position: 'Co-Founder'
    },
    {

      imgUrl: "https://www.projectglobalcure.org/assets/images/About-us/shweta-mam.jpg",
      name: '>Ms. Shweta Singh',
      position: 'Co-Founder'
    }
  ]

}
