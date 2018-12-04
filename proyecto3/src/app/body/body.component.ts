import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Http } from '@angular/http';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  generos = [];

  constructor(private modalDialog: NgbModal, private http: Http) {
    this.getGeneros();
  }

  getGeneros() {
    this.generos = [];
    this.http.get('http://www.yavirac.edu.ec/museo/server/genero/leer')
    .toPromise()
    .then(response => {
      this.generos = response.json();
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

    }), (result => {

    }));
  }
}
