import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factorial',
  templateUrl: './factorial.component.html',
  styleUrls: ['./factorial.component.css']
})
export class FactorialComponent implements OnInit {
  respuesta = 0;
  numero = 1;
  mostrado = false;
  constructor() { }

  ngOnInit() {
  }

  calcular() {
    this.mostrado = true;
    this.respuesta = this.factorialRecursivo(this.numero);
  }

  factorialRecursivo(numero: number) {
    if ( numero == 1) {
      return 1;
    }
    return numero * this.factorialRecursivo(numero - 1);
  }
}
