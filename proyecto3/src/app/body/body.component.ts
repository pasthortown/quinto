import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Http } from '@angular/http';
import { Genero } from 'src/models/genero';
import { Persona } from 'src/models/persona';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  generos: Genero[];
  personas: Persona[];
  personaModal: Persona;

  constructor(private modalDialog: NgbModal, private http: Http) {
    this.getGeneros();
    this.getPersonas();
    this.personaModal = new Persona();
    this.personaModal.idGenero = 0;
  }

  getPersonas() {
    this.personas = [];
    this.http.get('http://www.yavirac.edu.ec/museo/server/persona/leer?foo=' + Math.random())
    .toPromise()
    .then(response => {
      if (JSON.stringify(response.json()) === '[0]') {
        return;
      }
      this.personas = response.json() as Persona[];
    }).catch(error => {
      console.log(error);
    });
  }

  getGeneros() {
    this.generos = [];
    this.http.get('http://www.yavirac.edu.ec/museo/server/genero/leer?foo=' + Math.random())
    .toPromise()
    .then(response => {
      this.generos = response.json() as Genero[];
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

  open(content) {
    const options: NgbModalOptions = {
      size: 'lg'
    };
    this.modalDialog.open(content, options)
    .result
    .then((result => {
      if (result === 'ok') {
        this.guardarPersona(this.personaModal);
      }
    }), (result => {

    }));
  }

  guardarPersona(persona: Persona) {
    this.http.post('http://www.yavirac.edu.ec/museo/server/persona/crear', JSON.stringify(persona))
    .toPromise()
    .then(response => {
      this.getPersonas();
    }).catch(error => {
      console.log(error);
    });
  }
}
