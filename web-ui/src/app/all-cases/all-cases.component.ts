import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

import { Case } from '../models/cases.model';

@Component({
  selector: 'app-all-cases',
  templateUrl: './all-cases.component.html',
  styleUrls: ['./all-cases.component.css']
})
export class AllCasesComponent implements OnInit {
  pipe = new DatePipe('en-US');

  allCases: Case[] = [
    new Case(1, 'World Bank HR Manager', 'Mr. Jackson', '', '', '', '', this.pipe.transform(new Date('01 May 2019 16:03'), 'dd MMM YYYY h:mm a'), 1),
    new Case(2, 'Xbox Dev Team Lead', 'Mr. Robinson (Predicted)', '', '', '', '', this.pipe.transform(new Date('16 August 2020 9:16'), 'dd MMM YYYY h:mm a'), 0),
    new Case(3, 'CRP Head Manager', 'Mrs. Lif', '', '', '', '', this.pipe.transform(new Date('12 June 2022 7:06'), 'dd MMM YYYY h:mm a'), 2)
  ];

  constructor() { 
  }

  ngOnInit(): void {
  }

}
