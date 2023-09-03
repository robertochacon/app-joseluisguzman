import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  step:any = '1';
  value:string = '';
  chatList:any[] = [];

  constructor() { }

  ngOnInit(): void {
    let start = [
      {'msg':'Hola','position':'left', 'color':'gray'},
      {'msg':'¿Cómo te sientes hoy en términos de tu bienestar emocional y espiritual?','position':'left', 'color':'gray'}
    ]
    this.chatList.push(start);
    console.log(this.chatList);
    
  }

  sendResponse(){

  }

}
