import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';

//Side bar
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HelpComponent } from './help/help.component';
import { UsersComponent } from './users/users.component';

//Cards
import { MatCardModule} from '@angular/material/card';
//import { FlexLayoutModule } from '@angular/flex-layout';

//Search bar
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ExpensesComponent } from './expenses/expenses.component';
import { HistoryComponent } from './history/history.component';
import { RepositoryComponent } from './repository/repository.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { GoalsComponent } from './goals/goals.component';
import { TopbarComponent } from './topbar/topbar.component';
import { HistoryItemsComponent } from './history-items/history-items.component';
import { FilterComponent } from './filter/filter.component';


import { PieChartComponent } from './pie-chart/pie-chart.component'; 
import { ChartsModule } from 'ng2-charts';
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
import { AddNewTransactionComponent } from './add-new-transaction/add-new-transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UserProfileComponent,
    DashboardComponent,
    HelpComponent,
    UsersComponent,
    ExpensesComponent,
    HistoryComponent,
    RepositoryComponent,
    AnalyticsComponent,
    GoalsComponent,
    TopbarComponent,
    HistoryItemsComponent,
    FilterComponent,
    PieChartComponent,
    AddNewUserComponent,
    AddNewTransactionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    
    // Sidebar
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,

    //Cards
    MatCardModule,
    //FlexLayoutModule,

    //Search bar
    MatInputModule,
    MatFormFieldModule,

    ChartsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
