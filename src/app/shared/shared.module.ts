import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { IpcRendererService } from './service/ipc-renderer.service';
import { SanitizePipe } from './pipe/sanitize/sanitize.pipe';
import { BackDirectiveDirective } from './directive/back-directive.directive';
@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    SanitizePipe,
    BackDirectiveDirective
  ],
  exports: [
    SanitizePipe
  ]
})
export class SharedModule { 
  static forRoot():ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [IpcRendererService]
    }
  }
}
