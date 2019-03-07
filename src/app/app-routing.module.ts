import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app',
    pathMatch: 'full',
  },
  {
    path: 'app',
    // component: Core,
    // canActivate: [AuthorizationService],
    // canActivateChild: [AuthorizationService],
    children:
      [
        {
          path: '',
          component: HomeComponent
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
