import { Component, OnInit } from '@angular/core';
import { Goal } from '../../utils/Goal';

@Component({
  selector: 'app-add-new-goal',
  templateUrl: './add-new-goal.component.html',
  styleUrls: ['./add-new-goal.component.css']
})
export class AddNewGoalComponent implements OnInit {

  currentGoal!: Goal; 
  goalAdded: boolean;
  currentGoalDate?: string;

  constructor() {
    this.goalAdded = false;
   }

  ngOnInit(): void {
    this.currentGoal = new Goal("progress", "Undefined", 0, 0, new Date());
    this.goalAdded = false;
  }
  
  createGoal(): void {
    this.parseDate();
    this.currentGoal.save();
    this.goalAdded = true;
  }

  parseDate(): void {
    if (this.currentGoalDate) {
      this.currentGoal.deadline = new Date(this.currentGoalDate);
    }
  }

}
