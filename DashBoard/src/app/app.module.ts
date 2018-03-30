import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarDashComponent } from './navbar-dash/navbar-dash.component';
import { LoginDashComponent } from './login-dash/login-dash.component';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { PhasesDashComponent } from './phases-dash/phases-dash.component';
import { RouterModule, Routes } from '@angular/router';
import {MaterializeModule} from 'angular2-materialize';
import { ChartsModule } from 'ng2-charts';
import { SidebarDashComponent } from './sidebar-dash/sidebar-dash.component';
import { ModalDashComponent } from './modal-dash/modal-dash.component';
import {$} from 'jquery' ;
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavbarDashComponent,
    LoginDashComponent,
    HomeDashComponent,
    PhasesDashComponent,
    SidebarDashComponent,
    ModalDashComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path : "" ,
          component : LoginDashComponent
        },
        {
          path : "home",
          component : HomeDashComponent
        },
        {
          path : "phases",
          component : PhasesDashComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
