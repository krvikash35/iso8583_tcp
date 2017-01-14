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


@Directive({
  selector: '[scrollIntoView]'
})
export class ScrollIntoView  {
    constructor(private elementRef: ElementRef) {

    }
    ngAfterViewInit() {
      this.elementRef.nativeElement.scrollIntoView();
    }
}
