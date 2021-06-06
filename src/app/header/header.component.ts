import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  expense = 0;
  income = 0;
  obj = {id: 1,answer: 0,step: 1,minValue: 100000,maxValue: 300000};
  obj1 = {id: 2,answer: 0,step: 1,minValue: 10000,maxValue: 50000};
  constructor() { }

  ngOnInit(): void {
  }
  valueChanged(event:any){
  
    this.expense = this.obj1.answer;
    this.income = this.obj.answer;
  }
}
