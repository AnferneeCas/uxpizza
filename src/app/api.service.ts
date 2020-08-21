import { Injectable } from '@angular/core';
import { Feathers } from './feathers.service';
import { Observable } from 'rxjs';
@Injectable()
export class ApiService {
  constructor(private feathers: Feathers) {}

  menu() {
    var service = this.feathers.service('menu');

    // return this.feathers // todo: remove 'any' assertion when feathers-reactive typings are up-to-date with buzzard
    //   .service('users')
    //   .watch()
    //   .find();
  }
}
