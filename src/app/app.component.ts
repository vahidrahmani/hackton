import { Component, OnInit } from '@angular/core';
import { HacktonService } from './hackton.service';
export enum payType {
  ReqularPay = 'ReqularPay',
  OverTime = 'OverTime',
  SickDay = 'SickDay',
  Vacation = 'Vacation',
  Holiday = 'Holiday',
  Insurance = 'Insurance',
  Helth = 'Helth',
  Education = 'Education',
  Bills = 'Bills',
  Period = 'Period',
}
interface IPayColumn {
  hour: number;
  rate: number;
  amount: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'hackton';
  showInput = false;
  showName = false;
  userName = '';
  selectedItemType!: { name: string; type: string };
  benefitItems: string = 'Insurance';
  isEarningsClicked: boolean = false;
  isBenefitsClicked: boolean = false;
  hackTonItems: any[] = [];
  reqularPay!: IPayColumn;
  overTime!: IPayColumn;
  vacation!: IPayColumn;
  sickDay!: IPayColumn;
  period!: number;

  ernings: any = {
    ReqularPay: { rate: 0, amount: 0, hour: 0 },
    OverTime: { rate: 0, amount: 0, hour: 0 },
    SickDay: { rate: 0, amount: 0, hour: 0 },
    Holiday: { rate: 0, amount: 0, hour: 0 },
    Insurance: { rate: 0, amount: 0, hour: 0 },
    Helth: { rate: 0, amount: 0, hour: 0 },
    Education: { rate: 0, amount: 0, hour: 0 },
    Bills: { rate: 0, amount: 0, hour: 0 },
    Vacation: { rate: 0, amount: 0, hour: 0 },
    period: 14,
  };

  constructor(private hacService: HacktonService) {}
  ngOnInit(): void {
    this.getUsers();
  }
  onItemClick(name: string, type: string) {
    this.selectedItemType = { name: name, type: type };
    this.isEarningsClicked = true;
  }

  onSave() {
    console.log(this.ernings);
    this.hacService.save(this.ernings, this.userName).subscribe((rr) => {
      this.getUsers();
    });
  }

  getUsers() {
    this.hacService.getPaySlips().subscribe((result: any) => {
      this.hackTonItems = result.data;
      result.data.forEach((item: any) => {
        item.amount =
          JSON.parse(item.overTime).amount +
          JSON.parse(item.reqularPay).amount +
          JSON.parse(item.sickDay).amount +
          JSON.parse(item.vacation).amount;
      });
    });
  }
}
