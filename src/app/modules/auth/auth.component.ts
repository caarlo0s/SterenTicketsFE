import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/core/services/auth.service';
import { SessionServices } from 'src/app/core/services/session.service';
import { AuthResponseModel } from 'src/app/core/models/auth.model';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  form!: FormGroup;
constructor(private formBuilder:FormBuilder,
  private authService:AuthService,
  private sessionService:SessionServices,
  private router:Router){

  this.form = this.formBuilder.group({
    usuario: [null, [Validators.required]],
    password: [null, Validators.required]
  })
}

submit() {
  if (this.form.valid) {
    console.log("Es validos")
    const form= this.form.value;
      this.authService.getLogin(form.usuario,form.password).then(result=>{
        if(result.error===0)
        {
          if (result.data.length != 0) {
            const auth = result.data[0] as AuthResponseModel;
            this.sessionService.setSession(auth);

            this.router.navigate(['/dashboard']);
          }
          else {

            alert("Credenciales incorrectas")
            this.form.controls["password"].reset();
          }

        }
        else{
          console.log(result.message);
        }
      })
  }
  else{
    this.form.controls["password"].reset();
  }
}

}
