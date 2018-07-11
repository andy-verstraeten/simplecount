import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ForWhoService {
  forWhoSelected = new Subject<string[]>();
  setForWho(forWhoList: string[]) {
    this.forWhoSelected.next(forWhoList);
  }

  getForWho() {
    return this.forWhoSelected.asObservable();
  }
}
