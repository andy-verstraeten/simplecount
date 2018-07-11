import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Tracker} from '../model/Tracker';
import {CurrentTrackerService} from '../services/current-tracker.service';
import {NgForm} from '@angular/forms';
import {ExpenseService} from '../services/expense.service';
import {Expense} from '../model/Expense';


@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.scss'],
  providers: [ExpenseService]
})
export class AddExpenseComponent implements OnInit {
  allSelected = false;
  tracker: Tracker = new Tracker( '', '' , '' , ['Andy', 'Latif', 'Alien'], []);
  title = '';
  constructor(private currentTrackerService: CurrentTrackerService, private location: Location, private expenseService: ExpenseService) {

  }
  ngOnInit() {
    this.tracker = this.currentTrackerService.getSync();
  }
  goBack() {
    this.location.back();
  }

  onAddExpense(form: NgForm) {
    console.log(this.tracker._id)
    console.log(form.value);
    const newExpense = new Expense(form.value.titleInput, form.value.amountInput, form.value.paidBy, form.value.paidFor,
      form.value.dateInput);
    this.expenseService.addExpense(this.tracker._id, newExpense).subscribe();
  }
}
