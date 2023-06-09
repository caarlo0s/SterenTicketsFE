import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketsFilterComponent } from './tickets-filter.component';

const routes: Routes = [{path:'',component:TicketsFilterComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketsFilterRoutingModule { }
