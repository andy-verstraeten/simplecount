import {Component, Input, OnInit} from '@angular/core';
import {Saldo} from '../../../model/Saldo';

@Component({
  selector: 'app-value-block',
  templateUrl: './value-block.component.html',
  styleUrls: ['./value-block.component.scss']
})
export class ValueBlockComponent implements OnInit {
  @Input() participantSaldo: Saldo;
  @Input() largestSaldo: number;
  @Input() currency: number;
  nameClass: string;
  constructor() { }

  ngOnInit() {
    this.nameClass = this.participantSaldo.saldo < 0 ? 'negative-name' : 'positive-name';
    console.log(this.participantSaldo);
  }

}
