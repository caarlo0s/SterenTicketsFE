import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
      {
        path:'tickets',
        canActivate:[AdminGuard],
        loadChildren:()=>import('./tickets/tickets.module').then(m=>m.TicketsModule)
      },
       {
         path:'tickets-filter',
         canActivate:[AdminGuard],
         loadChildren:()=>import('./tickets-filter/tickets-filter.module').then(m=>m.TicketsFilterModule)
       },
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
