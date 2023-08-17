import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2'
declare const $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  step = 1;
  action = 'list';
  loading = false;
  loadData = false;
  result = '';
  details:any = null;
  name = '';
  email = '';
  role = 'admin';
  password = '';
  allUsers: any[] = [];
  listEntities: any[] = [];

  constructor(private _users: UsersService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(){
    this.loading = true;

    this._users.getAllUsers().subscribe((response)=>{

      this.allUsers  = response.data;

      setTimeout(function(){
        $('#listUsuarios').DataTable();
      },100);
      this.loading = false;
      
    }, error=>{
        this.loadData = false;
        this.loading = false;
    })

  }

  setUpdate(){
    this.name = this.details?.name;
    this.email = this.details?.email;
  }

  reloadDataTable(){
    setTimeout(function(){
      $('#listSuperAdmin').DataTable();
    },100);
  }

  reset(){
    this.name = '';
    this.email = '';
    this.role = '';
  }
  
  save(): void {

    this.loading = true;
    let datos = new FormData();
    datos.append("name",this.name);
    datos.append("email",this.email);
    datos.append("role",this.role);
    datos.append("password",this.password);
    // datos.append("file",this.file);

    this._users.setUsers(datos).subscribe((response)=>{
      this.loading = false;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Guardado correctamente!',
        showConfirmButton: false,
        timer: 2000
      });
      this.reset();
      this.getAllUsers();
    },error => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Problemas tecnicos!',
        text: 'No se pudo completar el registro, favor intente nuevamente.',
        showConfirmButton: false,
        timer: 2000
      });
      this.loading = false;
    })

  }

  update(): void {

    this.loading = true;
    this.details.name = this.name;
    this.details.email = this.email;

    this._users.updateUsers(this.details?.id, this.details).subscribe((response)=>{
      this.loading = false;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Actualizado correctamente!',
        showConfirmButton: false,
        timer: 2000
      });
      this.reset();
      this.getAllUsers();
      this.action = 'list';
    },error => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Problemas tecnicos!',
        text: 'No se pudo completar el registro, favor intente nuevamente.',
        showConfirmButton: false,
        timer: 2000
      });
      this.loading = false;
    })

  }
  
  delete(id: any): void {
    Swal.fire({
      title: 'Deseas eliminar este usuario?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'gray',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {

      this._users.deleteUsers(id).subscribe((response)=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Eliminado correctamente!',
          showConfirmButton: false,
          timer: 2000
        });
        this.getAllUsers();
      },error => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Problemas tecnicos!',
          text: 'No se pudo completar el registro, favor intente nuevamente.',
          showConfirmButton: false,
          timer: 2000
        });
      })
    
      }
    })

  }


}
