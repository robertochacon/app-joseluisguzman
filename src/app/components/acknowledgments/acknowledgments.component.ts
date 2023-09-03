import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acknowledgments',
  templateUrl: './acknowledgments.component.html',
  styleUrls: ['./acknowledgments.component.css']
})
export class AcknowledgmentsComponent implements OnInit {

  step:any = '1';

  constructor() { }

  ngOnInit(): void {
  }

}
