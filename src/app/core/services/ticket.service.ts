import { Injectable } from "@angular/core";
import { httpService } from "./http.service";
import { environment } from "src/enviroment/enviroment";

@Injectable({
  providedIn: 'root'
})
export class TicketService{
  constructor(private http:httpService){}

  AddTicket(comentarios:string,id_departamento:number,id_error:number,creado_por:string){
    const data = {
      'comentarios': comentarios,
      'id_departamento': id_departamento,
      'id_error': id_error,
      'creado_por': creado_por,
    }
    return this.http.ApiCallAsync(environment.methodPost,environment.urlWebApi,'Ticket/AddTicket',data).then(result=>{
      return result;
    })
  }


  AllotTicket(id_empleado:number,id_ticket:number){
    const data = {
      'asignado_a': id_empleado,
      'id_tikcet': id_ticket,

    }
    return this.http.ApiCallAsync(environment.methodPost,environment.urlWebApi,'DashboardTicket/AllotTicket',data).then(result=>{
      return result;
    })
  }

  GetTicketsByStatus(status:number){

    return this.http.ApiCallAsync(environment.methodGet,environment.urlWebApi,'DashboardTicket/GetTicketByStatus?status='+status).then(result=>{
      return result;
    })
  }

  GetTicketsByDepartament(id_departamento:number){

    return this.http.ApiCallAsync(environment.methodGet,environment.urlWebApi,'DashboardTicket/GetTickesByDepartament?id_departamento='+id_departamento).then(result=>{
      return result;
    })
  }
}
