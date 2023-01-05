import { Directive, ElementRef, Input, OnInit } from '@angular/core'
 
@Directive({
  selector: '[bgClass]',
})
export class ttClassDirective implements OnInit {
 
  @Input()
    bgClass!: string;
 
  constructor(private el: ElementRef) {
  }
 
  ngOnInit() {
    this.el.nativeElement.classList.add(this.bgClass);
  }
 
}