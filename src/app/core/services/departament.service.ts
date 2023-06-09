import { Injectable } from "@angular/core";
import { httpService } from "./http.service";
import { environment } from "src/enviroment/enviroment";

@Injectable({
  providedIn: 'root'
})
export class DepartamentService{
  constructor(private http:httpService){}

  GetDepartaments(){
    return this.http.ApiCallAsync(environment.methodGet,environment.urlWebApi,'Departament/GetDepartaments').then(result=>{
      return result;
    })
  }
}
