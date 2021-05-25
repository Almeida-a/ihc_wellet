import { UsersComponent } from './users/users.component';
import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { HistoryComponent } from './history/history.component';
import { RepositoryComponent } from './repository/repository.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { GoalsComponent } from './goals/goals.component';

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'expenses', component: ExpensesComponent},
  { path: 'repository', component: RepositoryComponent},
  { path: 'goals', component: GoalsComponent},
  { path: 'analytics', component: AnalyticsComponent},
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'help', component: HelpComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }