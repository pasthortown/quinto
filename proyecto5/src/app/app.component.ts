import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  a = 0;
  b = 0;
  respuesta = 0;
  saludo = "";

  constructor(public http: Http) {}

  suma() {
    this.http
      .post("http://localhost:8000/suma/", { a: this.a, b: this.b })
      .toPromise()
      .then(r => {
        this.respuesta = r.json();
      })
      .catch(e => {});
  }

  resta() {
    this.http
      .post("http://localhost:8000/resta/", { a: this.a, b: this.b })
      .toPromise()
      .then(r => {
        this.respuesta = r.json();
      })
      .catch(e => {});
  }

  multiplica() {
    this.http
      .post("http://localhost:8000/multiplicar/", { a: this.a, b: this.b })
      .toPromise()
      .then(r => {
        this.respuesta = r.json();
      })
      .catch(e => {});
  }

  divide() {
    this.http
      .post("http://localhost:8000/dividir/", { a: this.a, b: this.b })
      .toPromise()
      .then(r => {
        this.respuesta = r.json();
      })
      .catch(e => {});
  }

  saludaGet() {
    this.http
      .get("http://localhost:8000/saluda/")
      .toPromise()
      .then(r => {
        this.saludo = r.json();
      })
      .catch(e => {});
  }

  saludaPost() {
    this.http
      .post("http://localhost:8000/saluda/", {})
      .toPromise()
      .then(r => {
        this.saludo = r.json();
      })
      .catch(e => {});
  }

  saludaPut() {
    this.http
      .put("http://localhost:8000/saluda/", {})
      .toPromise()
      .then(r => {
        this.saludo = r.json();
      })
      .catch(e => {});
  }

  saludaDelete() {
    this.http
      .delete("http://localhost:8000/saluda/")
      .toPromise()
      .then(r => {
        this.saludo = r.json();
      })
      .catch(e => {});
  }
}
