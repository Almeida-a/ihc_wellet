import { Component, OnInit } from '@angular/core';
import { Goal } from './goal';
import { GOALS } from './account-goals'

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goalList: Goal[];
  constructor() { 
    this.goalList = GOALS;
  }

  ngOnInit(): void {
  }

}
