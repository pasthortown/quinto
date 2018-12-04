import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(private modalDialog: NgbModal) { }

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
