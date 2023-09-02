import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  step:any = '1';
  start:any = 'false';

  constructor() { }

  ngOnInit(): void {
    this.start = localStorage.getItem("start");
    if (this.start == undefined || this.start=='false') {
      this.step = '1';
      localStorage.setItem("start", "true");
    }else{
      this.step = '2';
    }
  }

  minutePrayer(){
    Swal.fire({
      title: 'Minuto de Oracion',
      text: "Demuestra que tu oracion encenderá la llama",
      color: '#000000',
      background: '#ea9147',
      showCancelButton: false,
      confirmButtonColor: '#e9e2bc',
      confirmButtonText: 'Habla con Dios'
    }).then((result) => {
      if (result.isConfirmed) {
        this.step = 'minutePrayer';
      }
    })
  }

  readingTime(){
    Swal.fire({
      title: 'Tiempo de Lectura',
      text: "Hagamos crecer la llama alcanzado conocimientos",
      color: 'white',
      background: '#0f3047',
      showCancelButton: false,
      confirmButtonColor: '#e9e2bc',
      confirmButtonText: 'Conoce de Dios'
    }).then((result) => {
      if (result.isConfirmed) {
        this.step = 'readingTime';
      }
    })
  }

  songs(){
    Swal.fire({
      title: 'Canciones',
      text: "Haga que  la unción de Dios arda a traves de la musica en su corazón",
      color: 'white',
      background: '#c63a32',
      showCancelButton: false,
      confirmButtonColor: '#e9e2bc',
      confirmButtonText: 'Alabemos'
    }).then((result) => {
      if (result.isConfirmed) {
        this.step = 'songs';
      }
    })
  }

  exercises(){
    Swal.fire({
      title: 'Cuido mi cuerpo',
      text: "Maten tu cuerpo que es templo del Espíritu Santo sano y activo",
      color: 'black',
      background: '#f4c05f',
      showCancelButton: false,
      confirmButtonColor: '#e9e2bc',
      confirmButtonText: 'Vamos Alla!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.step = 'exercises';
      }
    })
  }


}
