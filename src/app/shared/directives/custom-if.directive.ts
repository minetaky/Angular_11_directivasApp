import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dpCustomIf]'
})
export class CustomIfDirective {

  //Con este código tenemos acceso a todo el elemento HTML, mostrarlo/ocultarlo incluso repetirlo
  //con estas instrucciones
  @Input() set dpCustomIf( condicion: boolean){
    if( condicion ){
      this.viewContainer.createEmbeddedView( this.templateRef ); 
    }else{
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<HTMLElement>,
    private viewContainer: ViewContainerRef
  ) {}

}
