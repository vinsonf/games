import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersistService {
  _storage = window.sessionStorage;
  constructor() {
    console.log('PersistService.constructor()');

  }
  get(key: string): any {
    return this._storage.getItem(key);
  }

  set(key: string, value: any): void {
    this._storage.setItem(key, value);
  }

  remove(key: string): void {}

  clear(): void {}

  get username(): string {
    return this.get('username');
  } 

  
}
