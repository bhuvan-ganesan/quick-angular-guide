import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {

  clickCount:number = 0;
  clickCount1:number = 0;
  
  value:any=""
  clickMe() {
    this.clickCount++;
  }

  clickMeLess(){
    this.clickCount1++;
  }


handleInput(event:any) {
  // console.log(event, event.target.value)
  this.value = (event.target as HTMLInputElement).value;
}

val="";
handleInput1(element:any) {
  this.val=element.value;
}

value1 = "";
value3 = "";
value4 = "";


name="bhuvan"
 clearName() {
   this.name="";
 }

 txt="";
 clearValue() {
   this.txt="";
 }

}
