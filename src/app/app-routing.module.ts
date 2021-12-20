import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {
    path: 'secondPage',
    component: SecondPageComponent
  },
  {
    path: 'form',
    component: FormComponent
}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
