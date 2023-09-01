import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  step:any = '1';

  constructor() { }

  ngOnInit(): void {
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


}
