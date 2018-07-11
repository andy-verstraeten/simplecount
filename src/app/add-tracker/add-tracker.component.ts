import { Component, OnInit } from '@angular/core';
import {TrackerService} from '../services/tracker.service';
import {Tracker} from '../model/Tracker';
import { NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-tracker',
  templateUrl: './add-tracker.component.html',
  styleUrls: ['./add-tracker.component.scss']
})
export class AddTrackerComponent implements OnInit {
  title: string;
  description: string;
  currency: string;
  participants: string[] = []

  constructor(private router: Router, private trackerService: TrackerService) { }

  ngOnInit() {
  }

  addTracker(form: NgForm) {
    if (!form.form.invalid) {
      this.trackerService.addTracker(new Tracker(form.value.title, form.value.description, form.value.currency, this.participants, []))
        .subscribe();
      this.router.navigate(['/overview']);
    }
  }
}
