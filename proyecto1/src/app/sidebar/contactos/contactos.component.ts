import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  contactos = [
    {NombreContacto: 'Luis', Estado: 'En Clase', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2017%2F01%2F06%2F868320_people_512x512.png&f=1'},
    {NombreContacto: 'María', Estado: 'En Trabajo', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822739_user_512x512.png&f=1'},
    {NombreContacto: 'Luis', Estado: 'En Clase', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2017%2F01%2F06%2F868320_people_512x512.png&f=1'},
    {NombreContacto: 'María', Estado: 'En Trabajo', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822739_user_512x512.png&f=1'},
    {NombreContacto: 'Luis', Estado: 'En Clase', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2017%2F01%2F06%2F868320_people_512x512.png&f=1'},
    {NombreContacto: 'María', Estado: 'En Trabajo', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822739_user_512x512.png&f=1'},
    {NombreContacto: 'Luis', Estado: 'En Clase', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2017%2F01%2F06%2F868320_people_512x512.png&f=1'},
    {NombreContacto: 'María', Estado: 'En Trabajo', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822739_user_512x512.png&f=1'},
    {NombreContacto: 'Luis', Estado: 'En Clase', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2017%2F01%2F06%2F868320_people_512x512.png&f=1'},
    {NombreContacto: 'María', Estado: 'En Trabajo', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822739_user_512x512.png&f=1'},
    {NombreContacto: 'Luis', Estado: 'En Clase', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2017%2F01%2F06%2F868320_people_512x512.png&f=1'},
    {NombreContacto: 'María', Estado: 'En Trabajo', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822739_user_512x512.png&f=1'},
    {NombreContacto: 'Luis', Estado: 'En Clase', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2017%2F01%2F06%2F868320_people_512x512.png&f=1'},
    {NombreContacto: 'María', Estado: 'En Trabajo', Imagen: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F09%2F01%2F822739_user_512x512.png&f=1'} 
  ];

  constructor() { }

  ngOnInit() {
  }

}
