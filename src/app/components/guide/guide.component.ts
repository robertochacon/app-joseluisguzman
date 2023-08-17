import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  loading = false;
  listCategories: any[] = [];

  constructor(private _categories: CategoriesService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }

  getAllCategories(){
    this.loading = true;
    this._categories.getAllCategories().subscribe((response)=>{
      this.listCategories  = response.data;
      this.loading = false;
    }, error=>{
        this.loading = false;
    })
  }

}
