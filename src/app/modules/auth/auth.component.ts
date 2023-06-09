import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  form!: FormGroup;
constructor(private formBuilder:FormBuilder){

  this.form = this.formBuilder.group({
    usuario: [null, [Validators.required]],
    password: [null, Validators.required]
  })
}

submit() {
  if (this.form.valid) {
    console.log("Es validos")
    //this.submitEM.emit(this.form.value);
  }
}

}
