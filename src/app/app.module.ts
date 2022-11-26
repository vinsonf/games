import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PageSelectGameComponent } from './pages/page-select-game/page-select-game.component';
import { StatusComponent } from './components/status/status.component';
console.log(location.href)
const url = location.href === 'http://localhost:4200/' ? 'http://localhost:3000' : '';
const config: SocketIoConfig = { url, options: {
  transports: ['websocket'],
  // upgrade: false,
  // reconnection: true,
  // reconnectionDelay: 1000,
  // reconnectionDelayMax: 5000,
  // reconnectionAttempts: Infinity,
  // timeout: 10000,
  // autoConnect: true, 
} };

@NgModule({
  declarations: [
    AppComponent,
    PageSelectGameComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
