import {Component, Input, OnInit} from '@angular/core';
import {Expense} from '../../../../model/Expense';

@Component({
  selector: 'app-expense-summary',
  templateUrl: './expense-summary.component.html',
  styleUrls: ['./expense-summary.component.scss']
})
export class ExpenseSummaryComponent implements OnInit {
  @Input() expense: Expense;
  @Input() currency: string;
  constructor() { }

  ngOnInit() {
  }

}
