import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { ContentsService } from 'src/app/services/contents.service';
import { CategoriesService } from 'src/app/services/categories.service';
import Swal from 'sweetalert2'
declare const $: any;

@Component({
  selector: 'app-contens',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  step = 1;
  action = 'list';
  loading = false;
  loadData = false;
  result = '';
  details:any = null;
  category:any = 'seleccionar';
  name = '';
  description = '';
  file: any = [];
  listContents: any[] = [];
  listCategories: any[] = [];


  constructor(private _contents: ContentsService, private _categories: CategoriesService) { }

  ngOnInit(): void {
    this.getAllContents();
    this.getAllCategories();
  }

  getAllContents(){
    this.loading = true;

    this._contents.getAllContents().subscribe((response)=>{

      this.listContents  = response.data;

      setTimeout(function(){
        $('#listContents').DataTable();
      },100);
      this.loading = false;
      
    }, error=>{
        this.loadData = false;
        this.loading = false;
    })

  }

  getAllCategories(){
    this._categories.getAllCategories().subscribe((response)=>{
      this.listCategories = response.data;
    }, error=>{
        this.listCategories = []
    })
  }

  toEmbedYouTube(url:any){    
    this.file = url.replace("watch?v=", "embed/");
    console.log(this.file);
    
  }

  reloadDataTable(){
    setTimeout(function(){
      $('#listContents').DataTable();
    },100);
  }

  getFile(event: any){
    this.file = event.target.files[0];
  }

  reset(){
    this.name = '';
    this.description = '';
    this.file = [];
  }
  
  save(): void {

    this.loading = true;
    let datos = new FormData();
    datos.append("id_category",this.category);
    datos.append("name",this.name);
    datos.append("description",this.description);
    datos.append("image",this.file);

    this._contents.setContents(datos).subscribe((response)=>{
      this.loading = false;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Guardado correctamente!',
        showConfirmButton: false,
        timer: 2000
      });
      this.reset();
      this.getAllContents();
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

  setUpdate(){
    this.name = this.details?.name;
    this.description = this.details?.description;
    this.file = this.details?.image;
  }

  update(): void {

    this.loading = true;
    this.details.name = this.name;
    this.details.description = this.description;
    this.details.image = this.file;

    this._contents.updateContents(this.details?.id, this.details).subscribe((response)=>{
      this.loading = false;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Actualizado correctamente!',
        showConfirmButton: false,
        timer: 2000
      });
      this.reset();
      this.getAllContents();
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
      title: 'Deseas eliminar este contenido?',
      // text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: 'gray',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {

      this._contents.deleteContents(id).subscribe((response)=>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Eliminado correctamente!',
          showConfirmButton: false,
          timer: 2000
        });
        this.getAllContents();
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
