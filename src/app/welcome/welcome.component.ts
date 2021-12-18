import { Component, OnInit, Input } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],

})
export class WelcomeComponent implements OnInit {
  email: string = '';
  constructor(){}

  emailPattern = '@'
  ngOnInit():void{

  }

  onSubmit(x:any){
    console.log(x);
    console.log(x.email.match(this.emailPattern));


  }
}
