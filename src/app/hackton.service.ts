import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HacktonService {
  constructor(private http: HttpClient) {}

  getPaySlips() {
    return this.http.get('http://127.0.0.1:8000/paySlip');
  }

  save(data: any, name: string) {
    let payLoad = {
      name: name,
      reqularPay: data.ReqularPay,
      overTime: data.OverTime,
      vacation: data.Vacation,
      sickDay: data.SickDay,
      period: 14,
    };
    return this.http.post('http://127.0.0.1:8000/paySlip', payLoad);
  }
}
