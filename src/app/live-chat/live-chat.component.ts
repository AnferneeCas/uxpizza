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
  constructor(public apiService: ApiService, public featherIO: Feathers) {}
  ngOnInit(): void {
    this.featherIO._socket.on('news', (res) => {
      console.log(res);
      this.mensajes.push(res);
    });
    // this.mensajes = this.apiService.menu().pipe(
    //   map((m: Paginated<any>) => m.data),
    //   map((m: Array<any>) => m.reverse())
    // );
  }

  sendMessage() {
    console.log('tesfsd');
    this.featherIO._socket.emit('newMessage', {
      mensaje: this.mensaje,
      user: 'Anfer',
    });
  }
  open() {
    this.close = !this.close;
  }
}
