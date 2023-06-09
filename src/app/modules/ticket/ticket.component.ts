import { Component, OnInit } from '@angular/core';
import { ErrorServices } from 'src/app/core/services/error.service';
import { ErrorModel } from 'src/app/core/models/error.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartamentService } from 'src/app/core/services/departament.service';
import { DepartamentModel } from 'src/app/core/models/departament.model';
import { TicketService } from 'src/app/core/services/ticket.service';
@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {
  formComents:FormGroup;
  errorList: ErrorModel[] = [];
  departamentList:DepartamentModel[]=[];
  errorSelected: any;
  departamentSelected:any
  stepsByError: ErrorModel = {
    id_error: 0,
    descripcion: '',
    paso_uno: '',
    paso_dos: '',
    paso_tres: ''
  };


  constructor(
    private errorService: ErrorServices,
    private formBuilder:FormBuilder,
    private departamentService:DepartamentService,
    private ticketService:TicketService
    ) {
    this.formComents = this.formBuilder.group({
      nombre: [null, [Validators.required]],
      comentarios: [null]
    })

  }
  ngOnInit(): void {
    localStorage.removeItem('acces_token');
    this.errorService.GetErrors().then(errorResult => {
      if (errorResult.error === 0) {
        this.errorList = errorResult.data;
        this.errorSelected = this.errorList[0].id_error;
        this.stepsByError = this.errorList[0];
      }
    })

    this.departamentService.GetDepartaments().then(resultDepartament=>{
      if(resultDepartament.error===0){
        this.departamentList=resultDepartament.data;
      }
    })
  }
  CrearTicket(){
    const secondForm= this.formComents.value;
    this.ticketService.AddTicket(secondForm.comentarios,this.departamentSelected,this.errorSelected,secondForm.nombre).then(resultAdd=>{
      if(resultAdd.error===0)
      {
        console.log(resultAdd);
      }
    })
  }
  printSteps(Error: any) {
    console.log(Error.value);
    this.stepsByError = this.errorList.filter(x => x.id_error == Error.value)[0]
}
selectDepartament(departament:any){
  this.departamentSelected= departament.value
}
}
