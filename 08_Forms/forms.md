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

**The Template-driven forms **

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





### Model-driven forms

In Reactive Forms or Model-driven approach, the logic of the form is defined in the component as an object. The Model-driven approach has more benefits as it makes the testing of the component easier.

Template-driven forms in Angular allows us to create sophisticated looking forms easily without writing any javascript code. The model-driven forms are created in component class, where Form fields are created as properties of our component class.  This makes it easier to test.


