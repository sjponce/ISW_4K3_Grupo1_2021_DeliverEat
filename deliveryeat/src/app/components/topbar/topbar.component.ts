import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openDialog() {
    swal({
      title: "Acerca de DeliveryEat!",
      text: "Realizado por Grupo 1 de ISW 4K3 2021",
      icon: "info",
    });
  }
}
