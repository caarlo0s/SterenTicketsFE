import { Component, ViewChild, OnInit} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DepartamentModel } from 'src/app/core/models/departament.model';
import { TicketModel } from 'src/app/core/models/ticket.model';
import { DepartamentService } from 'src/app/core/services/departament.service';
import { TicketService } from 'src/app/core/services/ticket.service';

@Component({
  selector: 'app-tickets-filter',
  templateUrl: './tickets-filter.component.html',
  styleUrls: ['./tickets-filter.component.scss']
})
export class TicketsFilterComponent implements OnInit{
  displayedColumns: string[] = ['id_ticket',
  'comentarios',
  'creado_por',
  'status',
  'departamento',
  'nombre',
  'error'];
  listTickets:TicketModel[]=[];
  departamentList:DepartamentModel[]=[]
  departamentSelected:any;
  dataSource = new MatTableDataSource<TicketModel>(this.listTickets);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private ticketService:TicketService, private departamentService:DepartamentService){}
ngOnInit(): void {
  this.departamentService.GetDepartaments().then(result=>{
    if(result.error===0){
      this.departamentList=result.data;
    }
  })
}
selectDepartament(){
  this.ticketService.GetTicketsByDepartament(this.departamentSelected).then(result=>{
    if(result.error==0){
      this.dataSource=result.data;
      this.dataSource.paginator = this.paginator;
    }
  })
}
  GetTicketsByStatus(event:any){
      this.ticketService.GetTicketsByStatus(event.value).then(result=>{
        if(result.error==0){
          this.dataSource=result.data;
          this.dataSource.paginator = this.paginator;
        }
      })
  }


}
