import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { Paginated } from '@feathersjs/feathers';
import { Feathers } from '../feathers.service';

@Component({
  selector: 'live-chat',
  templateUrl: './live-chat.component.html',
  styleUrls: ['./live-chat.component.css'],
})
export class LiveChatComponent implements OnInit {
  mensajes = [];
  mensaje;
  close = true;

  currentTime = new Date()
  hours = this.currentTime.getHours()
  minutes = this.currentTime.getMinutes()
  document= this.hours + ":"
  
  
  


  constructor(public apiService: ApiService, public featherIO: Feathers) { }
  ngOnInit(): void {
    this.featherIO._socket.on('news', (res) => {
      console.log(res);
      this.mensajes.push(res);
    });
    // this.mensajes = this.apiService.menu().pipe(
    //   map((m: Paginated<any>) => m.data),
    //   map((m: Array<any>) => m.reverse())
    // );
    if(this.minutes<10){
      this.document= this.document +"0"+this.minutes
    }else{
      this.document= this.document + this.minutes
    }
  }

  sendMessage() {
    console.log('tesfsd');
    this.featherIO._socket.emit('newMessage', {
      mensaje: this.mensaje,
      user: this.document,
    });
    this.mensaje=""
  }
  open() {
    this.close = !this.close;
  }
}
