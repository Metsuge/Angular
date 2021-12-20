import { Component } from '@angular/core';

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
  }
}
