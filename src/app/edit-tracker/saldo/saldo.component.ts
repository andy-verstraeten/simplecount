import {Component, Input, OnInit} from '@angular/core';
import {SaldoService} from '../../services/saldo.service';
import {CurrentTrackerService} from '../../services/current-tracker.service';
import {Saldo} from '../../model/Saldo';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.scss']
})
export class SaldoComponent implements OnInit {
  trackerId: string;
  saldo: Saldo[];
  largestSaldo: number;
  currency: string;
  constructor(private currentTrackerService: CurrentTrackerService , private saldoService: SaldoService) {
  }

  ngOnInit() {
    this.saldo = this.saldoService.saldoList;
    this.currentTrackerService.getCurrentTracker().subscribe( currentTracker => {
      this.trackerId = currentTracker._id;
      this.saldoService.getSaldo(this.trackerId).subscribe(saldo => {
        this.saldo = saldo;
        this.saldoService.setSaldo(saldo);
        this.largestSaldo = this.saldoService.largestSaldo
        this.currency = currentTracker.currency;
      });
    } );

    this.currentTrackerService.getCurrentTracker();
  }


}
