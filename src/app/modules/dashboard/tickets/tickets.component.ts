
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { TicketModel } from 'src/app/core/models/ticket.model';
import { TicketService } from 'src/app/core/services/ticket.service';
@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements AfterViewInit {
  displayedColumns: string[] = ['id_ticket',
  'comentarios',
  'creado_por',
  'status',
  'departamento',
  'error'];
  listTickets:TicketModel[]=[];
  dataSource = new MatTableDataSource<TicketModel>(this.listTickets);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private ticketServices:TicketService){

  }
  ngAfterViewInit() {
    this.ticketServices.GetTicketsByStatus(0).then(result=>{
      if(result.error===0)
      {
        this.dataSource=result.data;
      }
    })
    this.dataSource.paginator = this.paginator;
  }

}
