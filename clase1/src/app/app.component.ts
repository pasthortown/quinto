import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numero1 = 0;
  numero2 = 0;
  resultado = 0;

  sumar(numero1: number, numero2: number): number {
    return numero1 + numero2;
  }

  factorial(numero1: number): number {
    let total = 1;
    for ( let i = 1; i <= numero1; i++) {
      total *= i;
    }
    return total;
  }

  factorialRecursivo(numero1: number): number {
    if ( numero1 == 1) {
      return 1;
    }
    return numero1 * this.factorialRecursivo(numero1 - 1);
  }

  calcular() {
    this.resultado = this.factorialRecursivo(this.numero1);
  }

  registrarConsola(valor: any) {
    console.log(valor);
  }
}
