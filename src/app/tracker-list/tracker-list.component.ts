import { Component, OnInit } from '@angular/core';
import {TrackerService} from '../services/tracker.service';
import {Tracker} from '../model/Tracker';

@Component({
  selector: 'app-tracker-list',
  templateUrl: './tracker-list.component.html',
  styleUrls: ['./tracker-list.component.scss']
})
export class TrackerListComponent implements OnInit {
  trackers: Tracker[] = []
  constructor(private trackerService: TrackerService) { }

  ngOnInit() {
    this.trackerService.getTrackers().subscribe(trackers => this.trackers = trackers);
  }

}
