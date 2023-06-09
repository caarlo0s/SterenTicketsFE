import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { JwtHelperService,JwtModule  } from '@auth0/angular-jwt';
import { AuthResponseModel } from "../models/auth.model";

@Injectable({
    providedIn: 'root',

})
export class SessionServices {

    private sessionSub= new BehaviorSubject({} as AuthResponseModel);
    session$ =this.sessionSub.asObservable();

    constructor(public jwtHelper: JwtHelperService){
      this.jwtHelper= new JwtHelperService();
    }



    setSession(session:AuthResponseModel){
        localStorage.setItem("acces_token",session.token)
        this.sessionSub.next(session);
    }

    isTokenExpired():boolean|null{

        const session=   localStorage.getItem("acces_token");
        if(session!=null){
            return this.jwtHelper.isTokenExpired(session);


        }
        return null
    }

}
