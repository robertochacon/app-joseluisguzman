import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.css']
})
export class ShareComponent implements OnInit {

  step:any = '1';
  ipLocal: string = 'Digita tu ip'+'/guide';
  
  constructor() { }

  ngOnInit(): void {
    this.ipLocal = document.location.protocol + "//" + document.location.hostname + ":" + document.location.port;
  }

}
