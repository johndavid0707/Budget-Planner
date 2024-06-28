import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule,SideNavComponent,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  //Income
lastMonthsIncome =['January: $1000', 'February: $1500', 'March: $1200'];
currentMonthIncome = '$2000';

//Expense
lastMonthsExpense =['January: $800', 'February: $1000', 'March: $1200'];
currentMonthExpense = '$2000';

//Todo Trans
todoTransactions = [
  {description:'pay electricity bill'},
  {description:'Submit monthly report'},
  {description:'Buy groceries'},
  {description:'Call insurance company'}
];

totalCurrentMonthIncome = 2000;
totalCurrentMonthExpense = 1500;


constructor(private router:Router){}

onIncome(){
  this.router.navigate(['/budget-planner/income']);
}

onExpense(){
  this.router.navigate(['/budget-planner/expense'])
}

onTodo(){
  this.router.navigate(['/budget-planner/todo'])
}

get CurrentMonthSavings():number{
  return this.totalCurrentMonthIncome - this.totalCurrentMonthExpense;
}


}
