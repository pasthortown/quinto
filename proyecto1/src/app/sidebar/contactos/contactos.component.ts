import { Contacto } from './../../models/contacto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  contactos: Contacto[];

  constructor() {
    this.contactos = [];
   }

  ngOnInit() {
    const luis = new Contacto('Luis');
    const maria = new Contacto('María', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822739_user_512x512.png&f=1');
    this.contactos.push(luis);
    this.contactos.push(maria);
  }

}
