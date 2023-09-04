import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acknowledgments',
  templateUrl: './acknowledgments.component.html',
  styleUrls: ['./acknowledgments.component.css']
})
export class AcknowledgmentsComponent implements OnInit {

  step:any = '1';
  percent:any = 0;

  constructor() { }

  ngOnInit(): void {
    this.percent = localStorage.getItem("percent");    
  }

  

}
