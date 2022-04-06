import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dp-error-mgs]'
})
export class ErrorMsgDirective implements OnInit{

  htmlElement: ElementRef<HTMLElement>;
  @Input() color: string = 'red';
  @Input() mensaje: string = "Este campo es requerido";

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
  }

  setColor():void{
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensaje(): void{
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

}
