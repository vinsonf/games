import { Component } from '@angular/core';
import { PersistService } from './services/persist.service';
import { SocketService } from './services/socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'games';
  constructor(
    private socketService: SocketService,
    private persistService: PersistService,
  ) {
   console.log(socketService);
    console.log(this.persistService.username);

    if (!this.persistService.username) {
      persistService.set('username', 'joe');
      
    }
  }
}
