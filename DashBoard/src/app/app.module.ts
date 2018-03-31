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
import { ProjectPhaseDetailDashComponent } from './project-phase-detail-dash/project-phase-detail-dash.component';
import { AddProjectDashComponent } from './add-project-dash/add-project-dash.component';
import { TenderDashComponent } from 'app/tender-dash/tender-dash.component';
import { BidprocessDashComponent } from 'app/bidprocess-dash/bidprocess-dash.component';
import { ConstructionCompletedDashComponent } from 'app/construction-completed-dash/construction-completed-dash.component';
import { ConstructionStartedDashComponent } from 'app/construction-started-dash/construction-started-dash.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarDashComponent,
    LoginDashComponent,
    HomeDashComponent,
    PhasesDashComponent,
    SidebarDashComponent,
    ModalDashComponent,
    ProjectPhaseDetailDashComponent,
    AddProjectDashComponent,
    TenderDashComponent,
    BidprocessDashComponent,
    ConstructionCompletedDashComponent,
    ConstructionStartedDashComponent
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path : '' ,
          component : LoginDashComponent
        },
        {
          path : 'home',
          component : HomeDashComponent
        },
        {
          path : 'phases',
          component : PhasesDashComponent,
          children : [
            {
              path : "tender",
              component : TenderDashComponent
            },
            {
              path : "bid",
              component : BidprocessDashComponent
            },
            {
              path : "completed",
              component : ConstructionCompletedDashComponent
            },
            {
              path : "started",
              component : ConstructionStartedDashComponent
            }
          ]
        },
        {
          path : "addProject",
          component : AddProjectDashComponent
        }
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
