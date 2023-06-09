import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./modules/ticket/ticket.module').then(m=>m.TicketModule)
  },
  {
    path:'login',
    loadChildren:()=>import('./modules/auth/auth.module').then(m=>m.AuthModule)
  }
  ,
  {
    path:'dashboard',
    canActivate:[AdminGuard],
    loadChildren:()=>import('./modules/dashboard/dashboard.module').then(m=>m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
