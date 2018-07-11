import {Expense} from './Expense';

export class Tracker {
  public _id: string;
  constructor(public name: string, public description: string, public currency: string,
              public participants: string[], public expenses: Expense[]) {

  }

}
