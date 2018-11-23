export class Contacto {
  nombreContacto: string;
  estado: string;
  imagen: string;

  constructor(name?: string, imagen?: string) {
    this.nombreContacto = name;
    this.estado = 'sin estado';
    this.imagen = imagen;
    if (typeof imagen === 'undefined') {
      this.imagen = 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2017%2F01%2F06%2F868320_people_512x512.png&f=1';
    }
  }
}
