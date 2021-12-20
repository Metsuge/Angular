import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private route: ActivatedRoute){
  }
  email:any;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) =>{
      console.log(params);
      this.email = params.data
    })
  }


}
