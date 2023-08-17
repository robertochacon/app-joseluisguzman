
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelperService } from './helper.service';

@Injectable({
  providedIn: 'root'
})
export class ContentsService {
  url: string = '';

  constructor(private http: HttpClient, private helper: HelperService) { 
    this.url =  helper.getUrl('contents');
  }

  getAllContents(): Observable<any>{
    const url = this.url;
    return this.http.get(url);
  }

  getAllContentsById(id:any): Observable<any>{
    const url = this.url+'/'+id;
    return this.http.get(url);
  }

  getAllContentsByCategoryId(id:any): Observable<any>{
    const url = this.url+'/category/'+id;
    return this.http.get(url);
  }

  setContents(json: any): Observable<any>{
    const url = this.url;
    return this.http.post(url, json);
  }

  updateContents(id: number, json: any): Observable<any>{
    const url = this.url+'/'+id;
    return this.http.post(url, json);
  }

  deleteContents(id: number): Observable<any>{
    const url = this.url+'/'+id;
    return this.http.delete(url);
  }

}
