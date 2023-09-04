import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  step:any = '1';
  like:boolean = false;
  like2:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
