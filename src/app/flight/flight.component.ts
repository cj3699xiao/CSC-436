import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title:string = 'Travel Cost Calculator';

  lhs:number = 0;
  rhs:number = 0;
  result:number = 0;
  operator: string = '+';


  recalc(): void {
    // console.log(this.operator);
    const op = this.operator.charAt(0);
    // console.log(op);
    if(op === '+') {
      console.log('Add');
      this.result = this.lhs + this.rhs;
    } else if(op === '-') {
      console.log('Minus');
      this.result = this.lhs - this.rhs;
    } else if(op === '*') {
      console.log('Times');
      this.result = this.lhs * this.rhs;
    } else {
      console.log('Divide');
      this.result = this.lhs / this.rhs;
    }
  }

  oriAirport: string = "Your Origin";
  desAirport: string = "Your destination";
  date: Date;
  travelers: number = 0;
  cost: number = 0;

  travelCost(): void {
    this.cost = this.travelers * 150;
  }


}
