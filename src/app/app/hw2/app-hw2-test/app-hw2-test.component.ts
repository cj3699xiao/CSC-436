import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-hw2-test',
  templateUrl: './app-hw2-test.component.html',
  styleUrls: ['./app-hw2-test.component.css']
})
export class AppHw2TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public items = [];

  public newTask;

  public addnewTask() {
    if(this.newTask === '') {
    } else if (this.newTask === '0101') {
      this.items.push("Hi Ken, is that you ? I knew it XD !!");
      this.newTask = '';
    } else if (this.newTask === '941104') {
      this.items.push("老婆，我爱你");
      this.newTask = '';
    } else {
      this.items.push(this.newTask);
      this.newTask = '';
    }
  }

  public deleteTask(index) {
    this.items.splice(index, 1);
  }

}
