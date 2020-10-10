import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Calculator';

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
}

