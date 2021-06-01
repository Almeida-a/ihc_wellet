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
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { AddNewTransactionComponent } from './add-new-transaction/add-new-transaction.component';
import { RouteInfo } from './RouteInfo';
import { AddNewGoalComponent } from './add-new-goal/add-new-goal.component';

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
  { path: 'add-new-user', component: AddNewUserComponent },
  { path: 'add-new-transaction', component: AddNewTransactionComponent },
  { path: 'add-new-goal', component: AddNewGoalComponent }
];

export const routes_names: RouteInfo[] = [
  { routeLink: 'dashboard', routeName: 'Dashboard' },
  { routeLink: 'users', routeName: 'Users' },
  { routeLink: 'history', routeName: 'History' },
  { routeLink: 'expenses', routeName: 'Expenses' },
  { routeLink: 'repository', routeName: 'Repository' },
  { routeLink: 'goals', routeName: 'Goals' },
  { routeLink: 'analytics', routeName: 'Analytics' },
  { routeLink: 'user-profile', routeName: 'User' },
  { routeLink: 'help', routeName: 'Help' },
  { routeLink: 'users', routeName: 'Users' },
  { routeLink: 'users', routeName: 'Users' },
  { routeLink: 'add-new-user', routeName: 'Add User' },
  { routeLink: 'add-new-transaction', routeName: 'Add Transaction' },
  { routeLink: 'add-new-goal', routeName: 'Add Goal' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }