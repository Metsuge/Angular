import { Component, OnInit, Input } from '@angular/core';
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
  emailPattern = "[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}"
  ngOnInit():void{

  }

  navToSecondComp(){
    this.route.navigate(['/secondPage'], {queryParams:{data:this.email}})
  }
}
