import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Case } from '../models/cases.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  pipe = new DatePipe('en-US');

  allCases: Case[] = [
    new Case(1, 'World Bank HR Manager', 'Mr. Jackson', '', '', '', '', this.pipe.transform(new Date('01 May 2019 16:03'), 'dd MMM YYYY h:mm a'), 1),
    new Case(2, 'Xbox Dev Team Lead', 'Mr. Robinson (Predicted)', '', '', '', '', this.pipe.transform(new Date('16 August 2020 9:16'), 'dd MMM YYYY h:mm a'), 0),
    new Case(3, 'CRP Head Manager', 'Mrs. Lif', '', '', '', '', this.pipe.transform(new Date('12 June 2022 7:06'), 'dd MMM YYYY h:mm a'), 2),
    //new Case(4, 'a', 'esra','esra@gmail.com', '', 'ariyosandim', '', this.pipe.transform(new Date('25 January 2000 09:15'), 'dd MMM YYYY h:mm a'), 2)
  ];

  totalCases: number = 107;
  totalUsers: number = 26;

  caseGraph = [
    {'finalized': 25},
    {'active': 15},
    {'deleted': 10}
  ];

  timelineDatas = [
    {
      'id': 45,
      'time': '10 minutes ago',
      'event': 'create'
    },
    {
      'id': 13,
      'time': '2 hours ago',
      'event': 'permatently_delete'
    },
    {
      'id': 9,
      'time': '7 hours ago',
      'event': 'edit'
    },
    {
      'id': 74,
      'time': '2 weeks ago',
      'event': 'report_create'
    },
    {
      'id': 17,
      'time': '2 hours ago',
      'event': 'create'
    },
    {
      'id': 49,
      'time': '3 months ago',
      'event': 'delete'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
