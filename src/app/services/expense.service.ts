import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Expense} from '../model/Expense';

@Injectable()
export class ExpenseService {
  private expenseUrl = 'http://localhost:3000/api/expense/';
  constructor(private http: HttpClient) {}

  addExpense(trackerId: string, expense: Expense) {
    return this.http.post<Expense>(this.expenseUrl + trackerId, expense);
  }

  getTotal(expenses: Expense[]) {
    return expenses.reduce((total, expense) => total + expense.amount, 0);
  }

}
