import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { ResolverGuard } from './resolver.guard';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {path:'', component: WelcomeComponent},
  {
    path: 'secondPage',
    component: SecondPageComponent,
    resolve: {
      data: ResolverGuard
    }
  },
  {
    path: 'form',
    component: FormComponent,
    resolve: {
      data: ResolverGuard
    }

}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
