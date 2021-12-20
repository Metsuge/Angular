import { Component, OnInit, Input } from '@angular/core';
import {FormBuilder, FormControl, NgForm, Validators} from '@angular/forms';
import {FormGroup} from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],

})
export class WelcomeComponent implements OnInit {

  constructor(private route: Router, private formBuilder: FormBuilder){
  }

  ngOnInit(): void {
  }

  email: any;
 navToSecondComp(){
    this.route.navigate(['/secondPage'], {queryParams:{data:this.email}})
  }
  emailPattern= "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  // isValidFormSubmitted = null;

  Form = this.formBuilder.group({
    FooNumber: ['', [Validators.required, Validators.pattern(this.emailPattern)]]
  });

  onFormSubmit() {
  // this.isValidFormSubmitted = false;
  if (this.Form.invalid) {
      return;
  }
  // this.isValidFormSubmitted = true;
  this.Form.reset();
  }

  get FooNumber() {
  return this.Form.get('FooNumber');
  }
}
