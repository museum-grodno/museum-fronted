import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from './dashboard/dashboard.component';
import {DictionaresComponent} from "./dictionares/dictionares.component";
import {AuthGuard} from '../services/guard/auth.guard';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'', component: DashboardComponent, canActivate: [ AuthGuard ]},
  {path:'dictionares', component: DictionaresComponent, canActivate: [ AuthGuard ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
