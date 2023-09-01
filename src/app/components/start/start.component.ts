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
        // Swal.fire(
        //   'Deleted!',
        //   'Your file has been deleted.',
        //   'success'
        // )
      }
    })
  }


}
