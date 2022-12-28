import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
 selector: 'counter',
 template: `
     <div>
       <p>
         Count: {{ cot }}
         <button (click)="increment()">Increment</button>
       </p>
     </div>
   `
})
export class CounterComponent {
 
  @Input() cot: number = 0;
  @Output() cotChange: EventEmitter<number> = new EventEmitter<number>();
 
  increment() {
   this.cot++;
   this.cotChange.emit(this.cot);
 }
}
