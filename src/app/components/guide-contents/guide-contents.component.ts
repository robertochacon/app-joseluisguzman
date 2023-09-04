import { Component, OnInit } from '@angular/core';
import { ContentsService } from 'src/app/services/contents.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guide-contents',
  templateUrl: './guide-contents.component.html',
  styleUrls: ['./guide-contents.component.css']
})
export class GuideContentsComponent implements OnInit {

  category:any = 0;
  name:any = '';
  step:any = '1';
  loading = false;
  listContents: any[] = [];

  constructor(private route: ActivatedRoute, private _contents: ContentsService) { }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('category');
    this.name = this.route.snapshot.paramMap.get('name');
    this.getAllCcontents();
  }

  getAllCcontents(){
    this.loading = true;
    this._contents.getAllContentsByCategoryId(this.category).subscribe((response)=>{
      this.listContents  = response.data;
      this.loading = false;
    }, error=>{
        this.loading = false;
    })
  }

  toEmbedYouTube(url:any){
    return url.replace("watch?v=", "embed/");
  }

  getIMG(){
    if (this.category==1) {
      return './assets/img/categories/1.jpg'
    }else if (this.category==2) {
      return './assets/img/categories/2.jpg'
    }else if (this.category==3) {
      return './assets/img/categories/3.jpg'
    }else if (this.category==4) {
      return './assets/img/categories/4.jpg';
    }else{
      return './assets/img/categories/default.jpg';
    }
  }

  setAdvance(){
    let percent:any = localStorage.getItem("percent");
    percent = parseInt(percent)+5;
    localStorage.setItem("percent", `${percent}`);
  }

}
