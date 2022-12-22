import { Component } from '@angular/core';
import {Person} from './in';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  inputField = 'angular-app';
  num : Number = 0;
  john = {
    firstName: 'John',
    lastName: ['Doe']
  };

  constructor(){

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.num = 'safdsa'; 
    console.log(this.num);

   
    
    console.log(this.getFullName(this.john));

  }



getFullName(person: Person) {
  return `dsfsdf dsf dsfds`;
  // return `${person.firstName} ${person.lastName}`;
}






 


}
