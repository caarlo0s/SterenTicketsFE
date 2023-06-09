import { Injectable } from "@angular/core";
import { httpService } from "./http.service";
import { environment } from "src/enviroment/enviroment";

@Injectable({
  providedIn: 'root'
})
export class ErrorServices{
  constructor(private http:httpService){}

  GetErrors(){
    return this.http.ApiCallAsync(environment.methodGet,environment.urlWebApi,'Error/GetErrors').then(result=>{
      return result;
    })
  }
}
