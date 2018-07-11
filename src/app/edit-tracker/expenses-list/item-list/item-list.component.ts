import { Component, OnInit } from '@angular/core';
import {Tracker} from '../../../model/Tracker';
import {TrackerService} from '../../../services/tracker.service';
import {ActivatedRoute} from '@angular/router';
import {CurrentTrackerService} from '../../../services/current-tracker.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  tracker: Tracker = new Tracker('', '' , '' , [], []);
  constructor(private currentTrackerService: CurrentTrackerService) {
  }
  ngOnInit() {
    this.tracker = this.currentTrackerService.getSync()
    this.currentTrackerService.getCurrentTracker().subscribe(tracker => {
      this.tracker = tracker;
    });
  }

}
