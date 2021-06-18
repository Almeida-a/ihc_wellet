import { Component, OnInit } from '@angular/core';
import { Goal } from '../../utils/Goal';
import { goals } from "src/storage/GoalsStorage";

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goalList: Goal[];

  inspectedGoal?: Goal;

  constructor() { 
    this.goalList = goals;
  }

  ngOnInit(): void {
  }

  setInspectedGoal(goal: Goal) : void {
    this.inspectedGoal = goal;
  }

}
