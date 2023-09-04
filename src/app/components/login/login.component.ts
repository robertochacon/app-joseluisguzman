import { HttpClient } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // email = "admin@gmail.com";
  // password = "admin";
  //login
  email = "ejemplo@gmail.com";
  password = "ejemplo";
  loading = false;
  step:any = 1;

  //register
  nameRegister = "";
  emailRegister = "";
  passwordRegister = "";
  
  constructor(private _authentication: AuthenticationService, private _users: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  login(): void{
    this.loading = true;

    this._authentication.login(this.email,this.password).subscribe((response)=>{
        
        localStorage.setItem("user_id", response.access_token.user.id);
        localStorage.setItem("name", response.access_token.user.name);
        localStorage.setItem("user", JSON.stringify(response.access_token.user));
        localStorage.setItem("token", response.access_token.token);
      
        setTimeout(() => {
          this.loading = false;
          if (response.access_token.user.role == 'user') {
            this.router.navigate(["/start"]);
          }else{
            this.router.navigate(["/dashboard"]);
          }
        }, 2000);

    }, error => {
      this.loading = false;
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

  register(): void{
    this.loading = true;
    let datos = new FormData();
    datos.append("name",this.nameRegister);
    datos.append("email",this.emailRegister);
    datos.append("password",this.passwordRegister);

    this._users.setUsers(datos).subscribe((response)=>{
      
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Registro completado!',
        showConfirmButton: false,
        timer: 2000
      });

      setTimeout(() => {
        this.loading = false;
        this.step = '2';
      }, 2000);

    }, error => {
      this.loading = false;
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

}
