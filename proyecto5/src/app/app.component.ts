import { Component } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  fecha = "";

  constructor(public http: Http) {}

  obtenerFecha() {
    this.http
      .get("http://localhost/simplews/public/?foo=" + Math.random())
      .toPromise()
      .then(r => {
        this.fecha = r.json();
      })
      .catch(e => {});
  }
}
