import { Component, OnInit } from '@angular/core';
import {$} from 'jquery' ;
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ModalDashComponent } from '../modal-dash/modal-dash.component';
import { Router } from '@angular/router';
import {MaterializeDirective} from 'angular2-materialize';

// declare var $:any;


@Component({
  selector: 'app-navbar-dash',
  templateUrl: './navbar-dash.component.html',
  styleUrls: ['./navbar-dash.component.css']
})
export class NavbarDashComponent implements OnInit {



  ngOnInit() {

    // $(document).ready(function(){

    //   $('.dropdown-trigger').dropdown();
    // });

   }


  constructor(public router: Router) {



  }

}





