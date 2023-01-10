import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent {

  // contactForm = new FormGroup({
  //   firstname: new FormControl(),
  //   lastname: new FormControl(),
  //   email: new FormControl(),
  //   gender: new FormControl(),
  //   isMarried: new FormControl(),
  //   country: new FormControl()
  // })

  contactForm = new FormGroup({
    firstname: new FormControl('Sachin', [Validators.required,Validators.minLength(10)]),
    lastname: new FormControl({value: 'Rahul', disabled: true}),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })
 
 
  onSubmit() {
    if(this.contactForm.valid){
      console.log(this.contactForm.value);
    } else {
      console.error('firstname');
    }
  }



}
