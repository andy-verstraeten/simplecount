import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TrackerService} from '../services/tracker.service';
import {Tracker} from '../model/Tracker';
import {CurrentTrackerService} from '../services/current-tracker.service';
import {SaldoService} from '../services/saldo.service';

@Component({
  selector: 'app-edit-tracker',
  templateUrl: './edit-tracker.component.html',
  styleUrls: ['./edit-tracker.component.scss']
})

export class EditTrackerComponent implements OnInit {
  tracker: Tracker = new Tracker('', '' , '' , [], []);
  constructor(private activatedRoute: ActivatedRoute, private trackerService: TrackerService, private currentTrackerService:
  CurrentTrackerService, private saldoService: SaldoService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.trackerService.getTracker(id).subscribe( tracker => {
        this.tracker = tracker;
        this.currentTrackerService.setCurrentTracker(tracker);
      });
      this.saldoService.getSaldo(id).subscribe(saldo =>  this.saldoService.setSaldo(saldo));
    });

  }

}
