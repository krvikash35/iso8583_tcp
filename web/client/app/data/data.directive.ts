import { Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[focusOnInit]'
})
export class FocusOnInit implements  AfterViewInit  {
    constructor(private elementRef: ElementRef) {
      // console.log("FocusOnInit custructor")
      // this.elementRef.nativeElement.focus();
    }
    ngAfterViewInit() {
      // console.log("FocusOnInit ngAfterViewInit:", this)
      this.elementRef.nativeElement.focus();
    }
}
