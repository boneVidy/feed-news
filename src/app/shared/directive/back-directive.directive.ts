import { Directive, HostListener } from '@angular/core';
import { Location } from '@angular/common';
@Directive({
  selector: '[routerBack]'
})
export class BackDirectiveDirective {

  constructor(private location: Location) { }

  @HostListener('click')
  goBack (): void {
    this.location.back();
  }
}
