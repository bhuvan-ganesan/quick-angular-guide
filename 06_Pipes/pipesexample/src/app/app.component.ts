import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // template: `<p> Unformatted date : {{toDate }} </p>
  // <p> Formatted date : {{toDate | date}} </p>
  // <p> Formatted date : {{toDate | date:'short'}} </p>
  // <p> Formatted date : {{title | uppercase}} </p>
  // ` ,
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Pipe Example' ; 
  toDate: Date = new Date(); 

  celcius!: number;
  Fahrenheit!: number;  

  covertToF(value:number){
    let temperature = (value - 32) /1.8 ;
    return temperature.toFixed(2);
  }
}
