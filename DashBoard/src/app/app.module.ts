import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarDashComponent } from './navbar-dash/navbar-dash.component';
import { LoginDashComponent } from './login-dash/login-dash.component';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { PhasesDashComponent } from './phases-dash/phases-dash.component';
import { RouterModule, Routes } from '@angular/router';
import {MaterializeModule} from 'angular2-materialize';

@NgModule({
  declarations: [
    AppComponent,
    NavbarDashComponent,
    LoginDashComponent,
    HomeDashComponent,
    PhasesDashComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path : "" ,
          component : LoginDashComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
