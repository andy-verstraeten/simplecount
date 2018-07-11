import {HttpClient} from '@angular/common/http';
import {Tracker} from '../model/Tracker';
import {Injectable} from '@angular/core';

@Injectable()
export class TrackerService {
  private trackerUrl = 'http://localhost:3000/api/trackers';

  constructor(private http: HttpClient) {}

  getTrackers() {
    return this.http.get<Tracker[]>(this.trackerUrl);
  }

  addTracker(newTracker: Tracker) {
    return this.http.post<Tracker>(this.trackerUrl, newTracker);
  }
  getTracker(id: string) {
    return this.http.get<Tracker>(this.trackerUrl + '/' + id);
  }

}
