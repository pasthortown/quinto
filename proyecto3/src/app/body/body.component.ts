import { Foto } from './../../models/foto';
import { Component, OnInit, ViewChild } from '@angular/core';
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

  @ViewChild('fileInput') fileInput;
  generos: Genero[];
  personas: Persona[];
  personaModal: Persona;
  fotoPersonaModal: Foto;
  constructor(private modalDialog: NgbModal, private http: Http) {
    this.personas = [];
    this.refresh();
  }

  refresh() {
    this.getPersonas();
    this.getGeneros();
    this.personaModal = new Persona();
    this.personaModal.idGenero = 0;
    this.fotoPersonaModal = new Foto();
    this.fotoPersonaModal.id = 0;
    this.fotoPersonaModal.mostrar = 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F08%2F31%2F11%2F54%2Fuser-1633249_960_720.png&f=1';
  }

  CodificarArchivo(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.fotoPersonaModal.idPersona = this.personaModal.id;
        this.fotoPersonaModal.nombreArchivo = file.name;
        this.fotoPersonaModal.tipoArchivo = file.type;
        this.fotoPersonaModal.adjunto = reader.result.toString().split(',')[1];
        this.fotoPersonaModal.mostrar = reader.result.toString();
      };
    }
  }

  estaSeleccionado(persona: Persona): boolean {
    if (this.personaModal.idGenero === 0) {
        return false;
    }
    return persona.id === this.personaModal.id;
  }

  seleccionar(persona: Persona): void {
    this.personaModal = persona;
    this.getFoto(this.personaModal.id);
  }

  getPersonas() {
    this.personas = [];
    this.http.get('http://www.yavirac.edu.ec/museo/server/persona/leer?foo=' + Math.random())
    .toPromise()
    .then(response => {
      if (JSON.stringify(response.json()) === '[0]') {
        this.fotoPersonaModal = new Foto();
        this.fotoPersonaModal.id = 0;
        this.fotoPersonaModal.mostrar = 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F08%2F31%2F11%2F54%2Fuser-1633249_960_720.png&f=1';
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

  deletePersona(persona: Persona) {
    this.http.get('http://www.yavirac.edu.ec/museo/server/persona/borrar?id=' + persona.id.toString())
    .toPromise()
    .then(response => {
      this.refresh();
    }).catch(error => {
      console.log(error);
    });
  }

  ngOnInit() {
  }

  open(content, operation: string) {
    const options: NgbModalOptions = {
      size: 'lg'
    };
    if (operation === 'nuevo') {
      this.personaModal = new Persona();
      this.personaModal.idGenero = 0;
    }
    this.modalDialog.open(content, options)
    .result
    .then((result => {
      if (result === 'ok') {
        if (operation === 'nuevo') {
          this.guardarPersona(this.personaModal);
        } else {
          this.actualizarPersona(this.personaModal);
        }
      }
    }), (result => {

    }));
  }

  actualizarPersona(persona: Persona) {
    this.http.post('http://www.yavirac.edu.ec/museo/server/persona/actualizar', JSON.stringify(persona))
    .toPromise()
    .then(response => {
      this.actualizarFoto();
    }).catch(error => {
      console.log(error);
    });
  }

  guardarPersona(persona: Persona) {
    this.http.post('http://www.yavirac.edu.ec/museo/server/persona/crear', JSON.stringify(persona))
    .toPromise()
    .then(response => {
      this.getPersona(persona.identificacion);
    }).catch(error => {
      console.log(error);
    });
  }

  getPersona(identificacion: string) {
    const data = {
      columna: 'identificacion',
      tipo_filtro: 'coincide',
      filtro: identificacion
    };
    this.http.post('http://www.yavirac.edu.ec/museo/server/persona/leer_filtrado', JSON.stringify(data))
    .toPromise()
    .then(response => {
      const personaRecuperada = response.json()[0];
      this.guardarFoto(personaRecuperada.id);
    }).catch(error => {
      console.log(error);
    });
  }

  guardarFoto(idPersona: number) {
    this.fotoPersonaModal.idPersona = idPersona;
    this.http.post('http://www.yavirac.edu.ec/museo/server/fotos/crear', JSON.stringify(this.fotoPersonaModal))
    .toPromise()
    .then(response => {
      this.refresh();
    }).catch(error => {
      console.log(error);
    });
  }

  actualizarFoto() {
    if (this.fotoPersonaModal.id === 0) {
      this.guardarFoto(this.personaModal.id);
      return;
    }
    this.http.post('http://www.yavirac.edu.ec/museo/server/fotos/actualizar', JSON.stringify(this.fotoPersonaModal))
    .toPromise()
    .then(response => {
      this.refresh();
    }).catch(error => {
      console.log(error);
    });
  }

  getFoto(idPersona: number) {
    const data = {
      columna: 'idPersona',
      tipo_filtro: 'coincide',
      filtro: idPersona
    };
    this.http.post('http://www.yavirac.edu.ec/museo/server/fotos/leer_filtrado', JSON.stringify(data))
    .toPromise()
    .then(response => {
      if (JSON.stringify(response.json()) === '[0]') {
        this.fotoPersonaModal = new Foto();
        this.fotoPersonaModal.id = 0;
        this.fotoPersonaModal.mostrar = 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2016%2F08%2F31%2F11%2F54%2Fuser-1633249_960_720.png&f=1';
        return;
      }
      this.fotoPersonaModal = response.json()[0] as Foto;
      this.fotoPersonaModal.mostrar = 'data:' + this.fotoPersonaModal.tipoArchivo + ';base64,' + this.fotoPersonaModal.adjunto;
    }).catch(error => {
      console.log(error);
    });
  }

  obtenerHora() {
    this.http.get('http://www.yavirac.edu.ec/hora.php?basura=' + Math.random())
    .toPromise()
    .then(r => {
      alert(r.json().fechaCompleta);
    }).catch( e => {
      console.log(e);
    });
  }
}
