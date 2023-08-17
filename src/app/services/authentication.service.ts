import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url: string = '';

  constructor(private http: HttpClient, private helper: HelperService) {
    this.url =  helper.getUrl('login');
   }
  login(email: string, password: string): Observable<any>{
    const url = this.url;

    const credentials = {
      "email":email,
      "password":password
    };

    return this.http.post(url,credentials);
  }

}
