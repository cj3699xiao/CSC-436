import { environment } from './../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  runningOs:string = environment.runningOS;
  displayAbout = false;

  aboutToggle() {
    this.displayAbout = !this.displayAbout;
  }
}

