<div align="center">
  <h1>Angular Forms</h1>
<sub>Author:
<a href="https://www.linkedin.com/in/bhuvanaganesan-l-2209047a" target="_blank">Bhuvan Ganesan</a><br>
</sub>
</div>


## Angular Forms Module

Angular forms module provides all the above services out of the box. It binds the form field to the Angular component class. It tracks changes made to the form fields so that we can respond accordingly. The Angular forms provide the built-in validators to validate the inputs. You can create your own custom validator. It presents the validation errors to the user. Finally, it encapsulates all the input fields into an object structure when the user submits the form.

Angular takes two approaches to build the forms. One is **Template-driven forms** approach and another one is **Reactive forms or model-driven** forms approach

### Building Blocks of Angular Forms

The Angular Forms module consists of three Building blocks, irrespective of whether you are using Template-driven or Reactive forms approach.

- FormControl
- FormGroup
- FormArray

**FormControl**

A FormControl represents a single input field in an Angular form.
The FormControl is an object that encapsulates all this information related to the single input element. It Tracks the value and validation status of each of these control
The FormControl is just a class. A FormControl is created for each form field. We can refer them in our component class and inspect its properties and methods

```sh
# Consider a simple Text input box
First Name : <input type="text" name="firstname" />

# Creating a FormControl in a Reactive forms
let firstname= new FormControl();

# Returns the value of the first name field
firstname.value  

# check the validation status of the First Name
firstname.errors      # returns the list of errors
firstname.dirty       # true if the value has changed (dirty)
firstname.touched     # true if input field is touched
firstname.valid       # true if the input value has passed all the validation
```
**FormGroup**

FormGroup is a collection of FormControls . Each FormControl is a property in a FormGroup. with the control name as the key.

Often forms have more than one field. It is helpful to have a simple way to manage the Form controls together.

FormGroup solve’s this issue by providing a wrapper interface around a collection of FormControls A FormGroup tracks the status of each child FormControl and aggregates the values into one object. with each control name as the key

A typical Angular Form can have more than one FormGroup. A FormGroup can also contain another FormGroup.

The Angular form is itself a FormGroup

```sh
# Consider the following Form. we have three input fields street, city & Pincode
city : <input type="text" name="city" >
Street : <input type="text" name="street" >
PinCode : <input type="text" name="pincode" >

#In Reactive form
let address= new FormGroup({
    street : new FormControl(""),
    city : new FormControl(""),
    pinCode : new FormControl("")
})

# Return
address.value

address {
    street :"",
    city:"",
    Pincode:""
}

address.get("street")

# Validation
address.errors     # returns the list of errors
address.dirty      # true if the value of one of the child control has changed (dirty)
address.touched    # true if one of the child control is touched
address.valid      # true if all the child controls passed the validation
```

**FormArray**

FormArray is an array of form controls. It is similar to FormGroup except for one difference. In FormGroup each FormControl is a property with the control name as the key. In FormArray is an array of form controls.

```sh
# Create a form array
contactForm = new FormGroup( {
    name: new FormControl(''),
    cities:new FormArray([
      new FormControl('Mumbai'),
      new FormControl('Delhi')
    ])
  });

# Return
 cities() :FormArray {
    return this.contactForm.get("cities") as FormArray
  }

# Validation
cities.errors     # returns the list of errors
cities.dirty      # true if the value of one of the child control has changed (dirty)
cities.touched    # true if one of the child control is touched
cities.valid      # true if all the child controls passed the validation  
```


### Template-driven forms 

In Template-driven approach is the easiest way to build the Angular forms. The logic of the form is placed in the template

In Template Driven Forms we specify behaviors/validations using directives and attributes in our template and let it work behind the scenes. All things happen in Templates hence very little code is required in the component class. This is different from the reactive forms, where we define the logic and controls in the component class.

**The Template-driven forms**

- The form is set up using ngForm directive
- controls are set up using the ngModel directive
- ngModel also provides the two-way data binding
- The Validations are configured in the template via directives

**Template-driven forms are**

- Contains little code in the component class 
- Easier to set up 
  
**While they are**

- Difficult to add controls dynamically
- Unit testing is a challenge

#### Example

To work with Template-driven forms, we must import the FormsModule

**HTML Form**
```sh
<form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">
 
  <p>
    <label for="firstname">First Name</label>
    <input type="text" name="firstname" ngModel>
  </p>
 
  <p>
    <label for="lastname">Last Name</label>
    <input type="text" name="lastname" ngModel>
  </p>
 
  <p>
    <label for="email">Email </label>
    <input type="text" id="email" name="email" ngModel>
  </p>
 
  <p>
    <label for="gender">Geneder</label>
    <input type="radio" value="male" name="gender" ngModel> Male
    <input type="radio" value="female" name="gender" ngModel> Female
  </p>
 
  <p>
    <label for="isMarried">Married</label>
    <input type="checkbox" name="isMarried" ngModel>
  </p>
 
  <select name="country" ngModel>
    <option [ngValue]="c.id" *ngFor="let c of countryList">
      {{c.name}}
    </option>
  </select>
 
  <p>
    <button type="submit">Submit</button>
  </p>
 
</form>
```
**Component Class**

```sh
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template driven forms';
 
  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];

   onSubmit(contactForm) {
    console.log(contactForm.value);
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

```

**ngForm**

The ngForm does the following

- Binds itself to the \<Form\> directive
- Creates a top-level FormGroup instance
- CreatesFormControl instance for each of child control, which has ngModel directive.
- CreatesFormGroup instance for each of the  NgModelGroup directive.

We can export the ngForm instance into a local template variable using ngForm as the key (ex: #contactForm="ngForm"). This allows us to access the many properties and methods of ngForm using the template variable contactForm

**FormControl**

We have six form elements in our HTML template. They are firstName, lastname, email, gender, isMarried & country. We need to bind them to FormControl instance. We do this by using the ngModel directive. Add the ngModel directive to each control as shown below.

**Submit Form**

We use the ngSubmit event, to submit the form data to the component class. We use the event binding (parentheses) to bind ngSubmit to OnSubmit method in the component class. When the user clicks on the submit button, the ngSubmit event will fire

**Alternative access**

We can assign the ngForm,FormControl or FormGroup instance to a template local variable. This allows us to check the status of the form like whether the form is valid, submitted, and value of the form elements, etc

```sh
<p>
  <button type="submit">Submit</button>
</p>
 
<pre>Value : {{contactForm.value | json }} </pre>
<pre>Valid : {{contactForm.valid}} </pre>
<pre>Touched : {{contactForm.touched  }} </pre>
<pre>Submitted : {{contactForm.submitted  }} </pre>


# Similarly, we can also get access to the FormControl instance by assigning the ngModel to a local variable as shown below
<input type="text" name="firstname" #fname="ngModel" ngModel>

<p>
  <label for="firstname">First Name </label>
  <input type="text" name="firstname" #fname="ngModel" ngModel>
</p>
 
<pre>Value    : {{fname.value}} </pre>
<pre>valid    : {{fname.valid}} </pre>
<pre>invalid  : {{fname.invalid}} </pre>
<pre>touched  : {{fname.touched}} </pre>


```

**Set the default/initial value**

```sh

<label for="firstname">First Name </label>
<input type="text" id="firstname" name="firstname" [(ngModel)]="contact.firstname">



ngOnInit() {
 
    this.contact = {
      firstname: "Sachin",
      lastname: "Tendulkar",
      email: "sachin@gmail.com",
      gender: "male",
      isMarried: true,
      country: "2"
    };
 
}

# Reset Form
<button type="button" (click)="reset(contactForm)">Reset</button>

reset(contactForm :NgForm) {
  contactForm.resetForm();
}

# Template reference variable

<form #contactForm="ngForm" (ngSubmit)="onSubmit(contactForm)">

@ViewChild('contactForm',null) contactForm: NgForm;

setTimeout(() => { 
  this.contactForm.setValue(this.contact);
});

# Change Value 
changeCountry() {
   this.contactForm.controls["country"].setValue("1");
}

reset() {
  this.contactForm.reset();
}
resetForm() {
   this.contactForm.resetForm();
}

```
**Note** that we are using the setTimeout That is because the form controls are yet initialized when the OnInit is fired. We will get the following error message


### Model-driven or Reactive Forms

In Reactive Forms or Model-driven approach, the logic of the form is defined in the component as an object. The Model-driven approach has more benefits as it makes the testing of the component easier.

Template-driven forms in Angular allows us to create sophisticated looking forms easily without writing any javascript code. The model-driven forms are created in component class, where Form fields are created as properties of our component class.  This makes it easier to test.

Reactive forms are forms where we define the structure of the form in the component class. i.e. we create the form model with Form Groups, Form Controls, and FormArrays. We also define the validation rules in the component class. Then, we bind it to the HTML form in the template. 

#### How to use Reactive Forms

- Import ReactiveFormsModule
- Create Form Model in component class using FormGroup, FormControl & FormArrays
- Create the HTML Form resembling the Form Model.
- Bind the HTML Form to the Form Model

**Import** 

```sh
# Import 
import { ReactiveFormsModule } from '@angular/forms';

imports: [
    BrowserModule,
    ReactiveFormsModule
],

```

**HTML Form** 

```sh
<form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
 
  <p>
    <label for="firstname">First Name </label>
    <input type="text" id="firstname" name="firstname" formControlName="firstname">
  </p>
 
  <p>
    <label for="lastname">Last Name </label>
    <input type="text" id="lastname" name="lastname" formControlName="lastname">
  </p>
 
  <p>
    <label for="email">Email </label>
    <input type="text" id="email" name="email" formControlName="email">
  </p>
 
  <p>
    <label for="gender">Geneder </label>
    <input type="radio" value="male" id="gender" name="gender" formControlName="gender"> Male
    <input type="radio" value="female" id="gender" name="gender" formControlName="gender"> Female
  </p>
 
  <p>
    <label for="isMarried">Married </label>
    <input type="checkbox" id="isMarried" name="isMarried" formControlName="isMarried">
  </p>
 
 
  <p>
    <label for="country">country </label>
    <select id="country" name="country" formControlName="country">
      <option value="1">India</option>
      <option value="2">USA</option>
      <option value="3">England</option>
      <option value="4">Singapore</option>
    </select>
  </p>
 
 
  <p>
    <button type="submit">Submit</button>
  </p>
 
</form>

```

**Component Class**

```sh
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mdf';
 
  contactForm = new FormGroup({
    firstname: new FormControl(),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  })
 
 
  onSubmit() {
    console.log(this.contactForm.value);
  }
}

```

**FormControl**

A FormControl takes 3 arguments. a default value, a validator, and an asynchronous validator. All of them are optional.

```sh
# Default Value

//Setting Default value as string
firstname= new FormControl(‘Sachin’);

//Setting Default value & disabled state as object
firstname: new FormControl({value: ‘Rahul’, disabled: true}),

firstname: new FormControl('', [Validators.required,Validators.minLength(10)]),

lastname: new FormControl('',[Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]),

email:new FormControl('',[Validators.email,Validators.required]),

```

**FormGroup**

```sh
contactForm = new FormGroup({
  firstname: new FormControl(),
  lastname: new FormControl(),
  email: new FormControl(),
  gender: new FormControl(),
  isMarried: new FormControl(),
  address:new FormGroup({
    city: new FormControl(),
    street: new FormControl(),
    pincode:new FormControl(),
    country: new FormControl(),
  })
})
```

### What is FormBuilder

The FormBuilder is the helper API to build forms in Angular.  It provides shortcuts to create the instance of the FormControl, FormGroup or FormArray. It reduces the code required to write the complex forms.

**component**

```sh
import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { groupBy } from 'rxjs/internal/operators/groupBy';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'Angular Reactive forms';
 
  contactForm;
 
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: this.formBuilder.group({
        city: ['', [Validators.required]],
        street: ['', [Validators.required]],
        pincode: ['', [Validators.required]],
      })
    });
  }
 
 
  get firstname() {
    return this.contactForm.get('firstname');
  }
 
  get lastname() {
    return this.contactForm.get('lastname');
  }
 
  get email() {
    return this.contactForm.get('email');
  }
 
  get gender() {
    return this.contactForm.get('gender');
  }
 
  get isMarried() {
    return this.contactForm.get('isMarried');
  }
 
  get country() {
    return this.contactForm.get('country');
  }
 
  get city() {
    return this.contactForm.get("address").get('city');
  }
 
  get street() {
    return this.contactForm.get("address").get('street');
  }
 
  get pincode() {
    return this.contactForm.get("address").get('pincode');
  }
 
 
  countryList: country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
 
  onSubmit() {
    console.log(this.contactForm.value);
  }
 
}
 
 
export class country {
  id: string;
  name: string;
 
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

```

**HTML**

```sh
<div style="float: left; width:50%;">
 
<form [formGroup]="contactForm" (ngSubmit)="onSubmit()" novalidate>
 
  <p>
    <label for="firstname">First Name </label>
    <input type="text" id="firstname" name="firstname" formControlName="firstname">
  </p>
 
  <div
    *ngIf="!firstname?.valid && (firstname?.dirty ||firstname?.touched)">
    <div [hidden]="!firstname.errors.required">
      First Name is required
    </div>
    <div [hidden]="!firstname.errors.minlength">
      Min Length is 10
    </div>
  </div>
 
  <p>
    <label for="lastname">Last Name </label>
    <input type="text" id="lastname" name="lastname" formControlName="lastname">
  </p>
 
  <div *ngIf="!lastname.valid && (lastname.dirty ||lastname.touched)">
    <div [hidden]="!lastname.errors.pattern">
      Only characters are allowed
    </div>
    <div [hidden]="!lastname.errors.maxLength">
      Max length allowed is {{lastname.errors.maxlength?.requiredLength}} 
    </div>
    <div [hidden]="!lastname.errors.required">
      Last Name is required
    </div>
  </div>
 
  <p>
    <label for="email">Email </label>
    <input type="text" id="email" name="email" formControlName="email">
  </p>
  <div *ngIf="!email.valid && (email.dirty ||email.touched)">
    <div [hidden]="!email.errors.required">
      email is required
    </div>
    <div [hidden]="!email.errors.email">
      invalid email id
    </div>
  </div>
 
 
  <p>
    <label for="gender">Geneder </label>
    <input type="radio" value="male" id="gender" name="gender" formControlName="gender"> Male
    <input type="radio" value="female" id="gender" name="gender" formControlName="gender"> Female
  </p>
  <div *ngIf="!gender.valid && (gender.dirty ||gender.touched)">
    <div [hidden]="!gender.errors.required">
      gender is required
    </div>
  </div>
 
  <p>
    <label for="isMarried">Married </label>
    <input type="checkbox" id="isMarried" name="isMarried" formControlName="isMarried">
  </p>
  <div *ngIf="!isMarried.valid && (isMarried.dirty ||isMarried.touched)">
    <div [hidden]="!isMarried.errors.required">
      isMarried is required
    </div>
  </div>
 
 
  <p>
    <label for="country">country </label>
    <select id="country" name="country" formControlName="country">
      <option [ngValue]="c.id" *ngFor="let c of countryList">
        {{c.name}}
      </option>
    </select>
  </p>
  <div *ngIf="!country.valid && (country.dirty ||country.touched)">
    <div [hidden]="!country.errors.required">
      country is required
    </div>
  </div>
 
  <div formGroupName="address">
 
    <div class="form-group">
      <label for="city">City</label>
      <input type="text" class="form-control" name="city" formControlName="city">
    </div>
    <div *ngIf="!city.valid && (city.dirty ||city.touched)">
      <div [hidden]="!city.errors.required">
        city is required
      </div>
    </div>
 
 
    <div class="form-group">
      <label for="street">Street</label>
      <input type="text" class="form-control" name="street" formControlName="street">
    </div>
    <div *ngIf="!street.valid && (street.dirty ||street.touched)">
      <div [hidden]="!street.errors.required">
        street is required
      </div>
    </div>
 
    <div class="form-group">
      <label for="pincode">Pin Code</label>
      <input type="text" class="form-control" name="pincode" formControlName="pincode">
    </div>
    <div *ngIf="!pincode.valid && (pincode.dirty ||pincode.touched)">
      <div [hidden]="!pincode.errors.required">
        pincode is required
      </div>
    </div>
 
  </div> 
 
  <p>
    <button type="submit" [disabled]="!contactForm.valid">Submit</button>
  </p>
 
</form>
 
</div>
 
<div style="float: right; width:50%;">
 
  <h3>Form Status</h3>
  <b>valid : </b>{{contactForm.valid}}
  <b>invalid : </b>{{contactForm.invalid}}
  <b>touched : </b>{{contactForm.touched}}
  <b>untouched : </b>{{contactForm.untouched}}
  <b>pristine : </b>{{contactForm.pristine}}
  <b>dirty : </b>{{contactForm.dirty}}
  <b>disabled : </b>{{contactForm.disabled}}
  <b>enabled : </b>{{contactForm.enabled}}
 
  <h3>Form Value</h3>
  {{contactForm.value |json}}
 
</div>

```

**Note on novalidate** - It prevents the browser's native validation to kick in i.e form data will not be validated upon submission. Examples include input where type='email'

**FormBuilder API** makes it easier to work with the reactive forms in Angular. We can make use of the group, array & control methods to build ourFormModel. FormBuilder reduces the code required to write the complex forms.



### Useful links
- https://angular.io/guide/forms
- https://stackblitz.com/run?file=src%2Fapp%2Fhero-form%2Fhero-form.component.html
- https://angular.io/guide/reactive-forms
- https://angular.io/guide/typed-forms **% New things to learn %**
- https://angular.io/guide/dynamic-form
- https://angular.io/api/forms/FormBuilder

