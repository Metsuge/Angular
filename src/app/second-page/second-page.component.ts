import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {
  email: any;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) =>{
      console.log(params);
      this.email = params.data
    })
  }

  navToForm(){
    this.router.navigate(['/form'], {queryParams:{data:this.email}})
  }

  navBack(){
    this.router.navigate([''])
  }
}
