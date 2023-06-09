import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsFilterRoutingModule } from './tickets-filter-routing.module';
import { TicketsFilterComponent } from './tickets-filter.component';

import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TicketsFilterComponent
  ],
  imports: [
    CommonModule,
    TicketsFilterRoutingModule,
    MatButtonModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatTableModule
  ]
})
export class TicketsFilterModule { }
