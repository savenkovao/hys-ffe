import {Injectable, Injector, NgZone} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    public zone: NgZone,
    protected injector: Injector
  ) { }

  log() {
    console.log(
     'isStable', this.zone.isStable
    );
  }
}
