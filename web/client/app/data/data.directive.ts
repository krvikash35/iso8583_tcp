import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[focusOnInit]'
})
export class FocusOnInit  {
    constructor(private elementRef: ElementRef) {

    }
    ngAfterViewInit() {
      this.elementRef.nativeElement.focus();
    }
}
