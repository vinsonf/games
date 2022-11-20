import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { PageSelectGameComponent } from './pages/page-select-game/page-select-game.component';
import { StatusComponent } from './components/status/status.component';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {
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
