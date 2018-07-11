import {Injectable} from '@angular/core';
import {Tracker} from '../model/Tracker';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CurrentTrackerService {
  public currentTracker = new Subject<Tracker>();
  public currentTrackerData: Tracker;

  setCurrentTracker(tracker: Tracker) {
    this.currentTrackerData = tracker;
    this.currentTracker.next(tracker);
  }

  getCurrentTracker(): Observable<Tracker> {
    return this.currentTracker.asObservable();
  }

  getSync(): Tracker {
    return this.currentTrackerTest;
  }

}
