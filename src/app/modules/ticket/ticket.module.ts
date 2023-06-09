import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketRoutingModule } from './ticket-routing.module';
import { TicketComponent } from './ticket.component';

import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button'
import {MatSelectModule} from '@angular/material/select';

import { ReactiveFormsModule,FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    TicketComponent
  ],
  imports: [
    CommonModule,
    TicketRoutingModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class TicketModule { }
