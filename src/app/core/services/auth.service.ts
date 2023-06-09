import { Injectable } from "@angular/core";
import { httpService } from "./http.service";
import { environment } from "src/enviroment/enviroment";
import { BehaviorSubject, Observable } from "rxjs";
import { AuthResponseModel } from "../models/auth.model";
@Injectable({
  providedIn: 'root'
})
export class AuthService{
  constructor(private http:httpService){}
  private usuario = new BehaviorSubject<AuthResponseModel>({} as AuthResponseModel);
  usuario$= this.usuario.asObservable();
  getLogin(usuario:string,password:string){
    const getLogin={
      usuario:usuario,
      password:password
    }
    return this.http.ApiCallAsync(environment.methodPost,environment.urlWebApi,"Auth/login",getLogin).then(result=>{
      this.usuario.next(result.data)
      return result;
    })
  }

}
