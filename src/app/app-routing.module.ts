import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SecondPageComponent } from './second-page/second-page.component';

const routes: Routes = [
  {path:'', component: WelcomeComponent,
    children: [{ path: 'secondPage',  component: SecondPageComponent }]
  },
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
