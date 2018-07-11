import {Component, Input, OnInit} from '@angular/core';
import {CurrentTrackerService} from '../../../services/current-tracker.service';
import {TrackerService} from '../../../services/tracker.service';
import {ExpenseService} from '../../../services/expense.service';

@Component({
  selector: 'app-expenses-footer',
  templateUrl: './expenses-footer.component.html',
  styleUrls: ['./expenses-footer.component.scss'],
  providers: [ExpenseService]
})
export class ExpensesFooterComponent implements OnInit {
  total: number;
  currency: string;
  constructor(private currentTrackerService: CurrentTrackerService, private trackerService: TrackerService,
              private expenseService: ExpenseService) { }

  ngOnInit() {
    this.currentTrackerService.getCurrentTracker().subscribe(tracker => {
      this.currency = tracker.currency;
      this.total = this.expenseService.getTotal(tracker.expenses);
    });
  }

}
