import { Component, OnInit, Input } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],

})
export class WelcomeComponent implements OnInit {

  constructor(private route: Router){
  }
  email: any;
  emailPattern = '@'
  ngOnInit():void{}

  navToSecondComp(){
    this.route.navigate(['/secondPage'], {queryParams:{data:this.email}})
  }
}
