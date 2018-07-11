import { InMemoryDbService} from 'angular-in-memory-web-api';
import {Tracker} from '../model/Tracker';
import {Expense} from '../model/Expense';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const trackers = [
      new Tracker('Ibiza', 'Travel expenses' , 'Euro' ,['Andy', 'Latif', 'Alien'], [
        new Expense('Supermarket', 132.5, 'Andy', ['Latif', 'Andy', 'Alien'], ''),
        new Expense('Supermarket', 132.5, 'Andy', ['Latif', 'Andy', 'Alien'],'')
      ] )
      ,
      new Tracker('Ibiza',null, '$', ['Andy', 'Latif', 'Alien'], [] )]
    return {  trackers };
  }
}


