import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent  {

  texto1: string = 'Verónica Meléndez.';
  color: string = 'red';

miFormulario: FormGroup = this.fb.group({
  nombre: [ '', Validators.required ]
})

  constructor( private fb: FormBuilder  ) { }

  tieneError( campo: string ): boolean {
   // console.log(this.miFormulario.get(campo)?.invalid);
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarColor(){
    const colorGenerado = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = colorGenerado;
  }

  cambiarNombre(){
    this.texto1 = 'Gerardo Amaro';
  }

}
