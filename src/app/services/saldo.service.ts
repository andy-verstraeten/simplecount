import {HttpClient} from '@angular/common/http';
import {Saldo} from '../model/Saldo';
import {Injectable} from '@angular/core';

@Injectable()
export class SaldoService {
  saldoUrl = 'http://localhost:3000/api/saldo/';
  saldoList: Saldo[];
  largestSaldo: number;
  constructor(private http: HttpClient) {}
  getSaldo(id: string) {
    return this.http.get<Saldo[]>(this.saldoUrl + id);
  }
  setSaldo(saldo: Saldo[]) {
   this.saldoList = saldo;
   this.calcLargestSaldo();
  }
  calcLargestSaldo() {
    this.largestSaldo =  Math.abs(this.saldoList.reduce((max, saldoItem) => Math.abs(saldoItem.saldo) > Math.abs(max)
      ? saldoItem.saldo : max, 0));
  }
}
