import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  n:any="any";
  title = 'registration';
  fnGetData(data:any){
    this.n=data
    console.log(this.n);

  }

message:""
}
