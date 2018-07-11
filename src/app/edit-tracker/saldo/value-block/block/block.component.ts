import {Component, Input, OnInit} from '@angular/core';
import {SaldoService} from '../../../../services/saldo.service';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {
  @Input() saldo: number;
  @Input() currency: number;
  blockClass: string;
  saldoClass: string;
  constructor(private saldoService: SaldoService) {

  }

  ngOnInit() {
    this.blockClass = this.saldo >= 0 ? 'positive-block' : 'negative-block';
    this.saldoClass = this.saldo >= 0 ? 'positive-saldo' : 'negative-saldo';
  }

  calcWidth() {
    console.log('width: ', this.saldo , this.saldoService.largestSaldo );
    return  Math.abs(this.saldo) / this.saldoService.largestSaldo * 100;
  }
}
