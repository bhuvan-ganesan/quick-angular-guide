import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Template driven forms';
  contact: any = null;
  @ViewChild('contactForm') contactForm1!: NgForm;

  ngOnInit() {
 
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2"
    };

    // UnComment When using Template form
    // setTimeout(() => { 
    //   this.contactForm1.setValue(this.contact);
    // });
 
}
 
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England'),
    new country('4', 'Japan')

  ];

   onSubmit(contactForm: NgForm) {
    console.log(contactForm.value);
  }

  reset(contactForm :NgForm) {
    // contactForm.resetForm();
   this.contactForm1.resetForm();
  }
  
}

export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
