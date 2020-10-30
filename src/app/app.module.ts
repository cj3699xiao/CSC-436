import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppHw2TestComponent } from './app/hw2/app-hw2-test/app-hw2-test.component';
import { AboutComponent } from './about/about.component';
import { FlightComponent } from './flight/flight.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'flight', component: FlightComponent},
  {path: 'todo', component: AppHw2TestComponent},
  {path: '', redirectTo: '/flight', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    AppHw2TestComponent,
    AboutComponent,
    FlightComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
