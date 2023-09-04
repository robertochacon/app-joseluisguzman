import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  step:any = '1';
  text:string = '';
  chatList:any[] = [];

  constructor() { }

  ngOnInit(): void {
    let start = [
      {'msg':'Hola','position':'left'}
    ]
    this.chatList.push(start);
    
  }

  setText(){    

    let scroll:any = document.querySelector(".chat");
    scroll.scrollTo(0, scroll.scrollHeight );

    // const scroll:any = document.querySelector(".chat");
    // scroll.scrollTop = scroll.scrollHeight;

    let text = {'msg':this.text,'position':'right'}
    this.chatList[0].push(text);

    if (this.text.toLowerCase().includes('hola')) {
      let text = {'msg':'¿Cómo te sientes hoy en términos de tu bienestar emocional y espiritual?','position':'left'}
      this.chatList[0].push(text);
    }else if (this.text.toLowerCase().includes('triste') || this.text.toLowerCase().includes('depresion')) {
      let text = {'msg':'Entiendo. ¿Experimentaste alguna emoción particular mientras leías la Biblia o participabas en las actividades de la aplicación hoy?','position':'left'}
      this.chatList[0].push(text);
    }else if (this.text.toLowerCase().includes('feliz') || this.text.toLowerCase().includes('alegre')) {
      let text = {'msg':'Perfecto. ¿Experimentaste alguna emoción particular mientras leías la Biblia o participabas en las actividades de la aplicación hoy?','position':'left'}
      this.chatList[0].push(text);
    }else{
      let text = {'msg':'Le recomiendo hablar con uno de los hermanos de nuestra comunidad.','position':'left'}
      this.chatList[0].push(text);
    }



  }

}
