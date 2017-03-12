import { Injectable } from '@angular/core';
import {IpcRendererService} from '../shared/service/ipc-renderer.service'
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class LoginService {

  constructor(private IpcRendererService: IpcRendererService) {
    
  }
  login (user: any):Observable<any> {
    return Observable.fromPromise(this.IpcRendererService.api('login', user));
  }
}
