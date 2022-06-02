import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulletin',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss']
})
export class BulletinComponent implements OnInit {




  constructor() { }

  ngOnInit(): void {
  }

  bulletin = [
    {
      imgUrl: "https://pgc-media.s3.amazonaws.com/blogs/ad8633ca-fbfc-44a0-b559-4a9f43a816bd/PGC-Schizophrenia%20Blog-%2002.jpg",
      heading: "A FASCINATING MIND: UNLOCKING SCHIZOPHRENIA AND UNDERSTANDING",
      info: " Schizophrenia is a serious mental disorder that affects the way a person thinks, feels,Schizophrenia is a serious mental disorder that affects the way a person thinks, feels,Schizophrenia is a serious mental disorder that affects the way a person thinks, feels,Schizophrenia is a serious mental disorder that affects the way a person thinks, feels,Schizophrenia is a serious mental disorder that affects the way a person thinks, feels,Schizophrenia is a serious mental disorder that affects the way a person thinks, feels,"
    },
    {
      imgUrl: "https://pgc-media.s3.ap-south-1.amazonaws.com/7c09ccc3-3c04-489c-bf59-6b5dec1cfbb8/blogs/91671627-115c-40fa-8fc5-71edd9ce6fcb/PGC-Water%20Pollution%20Blog-1.jpg",
      heading: "WATER POLLUTION AND ITS IMPACT ON HUMAN HEALTH. IT’S HIGH TIME TOWATER POLLUTION AND ITS IMPACT ON HUMAN HEALTH. IT’S HIGH TIME TO",
      info: "Important Facts All over the world, approximately 2 billion population use a drinking water"
    },
    {
      imgUrl: "https://pgc-media.s3.amazonaws.com/blogs/ad8633ca-fbfc-44a0-b559-4a9f43a816bd/PGC-Schizophrenia%20Blog-%2002.jpg",
      heading: "A FASCINATING MIND: UNLOCKING SCHIZOPHRENIA AND UNDERSTANDING",
      info: " Schizophrenia is a serious mental disorder that affects the way a person thinks, feels,Schizophrenia is a serious menta"
    }

  ]
}
