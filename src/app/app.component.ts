import { Component } from '@angular/core';
import {IpcRendererService} from './shared/ipc-renderer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [IpcRendererService]
})
export class AppComponent {
  title = 'app works!';
  constructor (private IpcRendererService) {
    this.IpcRendererService.send('msg', 'halo');
    this.IpcRendererService.on('msgFromMain', (msg) => {
      (console.log(msg));
    })
  }
}
