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
      imgUrl: "https://pgc-media.s3.ap-south-1.amazonaws.com/7c09ccc3-3c04-489c-bf59-6b5dec1cfbb8/stories/8b21394f-ed90-4b0e-b90b-dfb18777171a/PGC-PIC5.png",
      heading: '22-Year-Old Furkan Is Outcasted From Society, Help Before He Kills Himself.',
      info: '22-year-old Furkan is suffering from Neurofibromatosis. It is a congenital disorder that causes tumours to develop on nerve tissue. They can develop anywhere,.'
    },
    {
      imgUrl:"https://pgc-media.s3.ap-south-1.amazonaws.com/7c09ccc3-3c04-489c-bf59-6b5dec1cfbb8/stories/87d84955-997f-4fec-90ba-ad09a13c691b/PGC-PIC1.png",
      heading: '22-Year-Old Furkan Is Outcasted From Society, Help Before He Kills Himself.',
      info: '22-year-old Furkan is suffering from Neurofibromatosis. It is a congenital disorder that causes tumours to develop on nerve tissue. They can develop anywhere,.'
    },
    {
      imgUrl:"https://pgc-media.s3.ap-south-1.amazonaws.com/7c09ccc3-3c04-489c-bf59-6b5dec1cfbb8/stories/e0b17d07-dc28-4d08-b7f0-ab3688abaca6/PGC-IMG_5635.png",
      heading: '22-Year-Old Furkan Is Outcasted From Society, Help Before He Kills Himself.',
      info: '22-year-old Furkan is suffering from Neurofibromatosis. It is a congenital disorder that causes tumours to develop on nerve tissue. They can develop anywhere,.'
    },
    {
      imgUrl:"https://pgc-media.s3.ap-south-1.amazonaws.com/7c09ccc3-3c04-489c-bf59-6b5dec1cfbb8/stories/87d84955-997f-4fec-90ba-ad09a13c691b/PGC-PIC1.png",
      heading: '22-Year-Old Furkan Is Outcasted From Society, Help Before He Kills Himself.',
      info: '22-year-old Furkan is suffering from Neurofibromatosis. It is a congenital disorder that causes tumours to develop on nerve tissue. They can develop anywhere,.'
    }

  ]

}
