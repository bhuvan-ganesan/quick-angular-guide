<div align="center">
  <h1>Data Binding</h1>
<sub>Author:
<a href="https://www.linkedin.com/in/bhuvanaganesan-l-2209047a" target="_blank">Bhuvan Ganesan</a><br>
</sub>
</div>

## Angular Data Binding
where the data stays in sync between the component and the view. Whenever the user updates the data in the view, Angular updates the component. When the component gets new data, the Angular updates the view.

**Data Binding in Angular**

The data binding in Angular can be broadly classified into two groups. One way binding or two-way binding

**One way binding**

In one way binding data flows from one direction. Either from view to component or from component to view.

**From Component to View**

To bind data from component to view, we make use of **Interpolation** & **Property Binding**.

## Interpolation 
Interpolation allows us to include expressions as part of any string literal, which we use in our HTML. The angular evaluates the expressions into a string and replaces it in the original string and updates the view. You can use interpolation wherever you use a string literal in the view

The Angular uses the {{ }} (double curly braces) in the template to denote the interpolation. The syntax is as shown below

```sh
{{ templateExpression }}
```

The content inside the double braces is called Template Expression

The Angular first evaluates the Template Expression and converts it into a string. Then it replaces Template expression with the result in the original string in the HTML. Whenever the template expression changes, the Angular updates the original string again

### Ways to use 

**Interpolation is one-way binding**
Interpolation is one way as values go from the component to the template. When the component values change, the Angular updates the view. But if the values changes in the view components are not updated.

**The expression must result in a string**
Interpolation expression must result in a string. If we return an object it will not work. If you want to bind the expression that is other than a string (for example – boolean), then Property Binding is the best option.

**Should not change the state of the app**
You can't use JavaScript expressions that have or promote side effects, including:

Assignments (=, +=, -=, ...)
Operators such as new, typeof, or instanceof
Chaining expressions with ; or ,
The increment and decrement operators ++ and --
Some of the ES2015+ operators
Other notable differences from JavaScript syntax include:

No support for the bitwise operators such as | and &
New template expression operators, such as |

**Invoke a method in the component**
```sh
{{getTitle()}}
 
#Component
title = 'Interpolation';
getTitle(): string {
     return this.title;
 }
```

**Concatenate two string**
```sh
<p>Welcome to {{title}}</p>
<p>{{ 'Hello & Welcome to '+ ' Angular Interpolation '}}</p>
<p>Welcome {{firstName}}, {{lastName}}</p>
<p>Welcome {{getFirstName()}}, {{getLastName()}}</p>
```
**Mathematical operations**

```sh
<p>100x80 = {{100*80}}</p>
<p>Largest: {{max(100, 200)}}</p>
 
#Component
max(first: number, second: number): number {
  return Math.max(first, second);
}
```
**Bind to an element property**
```sh
<p>Show me <span class = "{{giveMeRed}}">red</span></p>
<p style.color={{giveMeRed}}>This is red</p>
```
**Some Examples**
```sh
#Image source
<div><img src="{{itemImageUrl}}"></div>

#Href
<a href="/product/{{productID}}">{{productName}}</a>

#Template reference variable
<label>Enter Your Name</label>
<input (keyup)="0" #name>
<p>Welcome {{name.value}} </p>

#NgNonBindable
Use ngNonBindable to tell Angular not to compile or bind the contents of the current DOM element. I.e any expression is not evaluated but shown as it is.
<p>Evaluate: {{variable}}</p>
<p ngNonBindable>Do not evaluate: {{variable}}</p> 
<p>Angular uses {{ variable }} syntax for Interpolation</p>
<p ngNonBindable>Angular uses {{ variable }} syntax for Interpolation</p>

#Pipes
<p>uppercase pipe: {{title | uppercase}}</p>
<p>pipe chain: {{title | uppercase | lowercase}}</p>
<p>json pipe: {{items | json}}</p>

#Safe navigation operator ( ? )
<p>The item name is: {{nullItem.Name}}</p>     
TypeError: Cannot read property 'itemName' of undefined


<p>The null item name is {{nullItem?.itemName}}</p>
 

```

## Property binding

Property binding is one way from component to view. It lets you set a property of an element in the view to property in the component. You can set the properties such as class, href, src, textContent, etc using property binding. You can also use it to set the properties of custom components or directives (properties decorated with @Input).

```sh
[binding-target]=”binding-source”
```

**Should not change the state of the app**
You can't use JavaScript expressions that have or promote side effects, including:

Assignments (=, +=, -=, ...)
Operators such as new, typeof, or instanceof
Chaining expressions with ; or ,
The increment and decrement operators ++ and --
Some of the ES2015+ operators
Other notable differences from JavaScript syntax include:

No support for the bitwise operators such as | and &
New template expression operators, such as |



**Property name in camel case**
There are few element property names in the camel case, while their corresponding attributes are not. For example rowSpan & colSpan properties of the table are in the camel case. The HTML attributes are all lowercase (rowspan & colspan)

**Remember the brackets**
The brackets, [], tell Angular to evaluate the template expression. If you omit the brackets, Angular treats the expression as a constant string and initializes the target property with that string:

## Class binding 
Class binding is used to add or remove classes to and from the HTML elements. You can add CSS Classes conditionally to an element, hence creating a dynamically styled element.

The Angular provides the three ways to add/remove classes to and from the element. One using the DOM ClassName Property. The second option is to use the Class shorthand. The third option is to use the NgClass directive, which is covered in a separate session

**Class binding with ClassName**
```sh
<div [className]="'red'">Test</div>

<div [className]="'red size20'">Test</div>
```
**HTML Class attribute**
```sh
<div class="red">red</div>

<div class="red" [className]="'size20'">red</div>
```
**Conditionally apply Classes**
```sh
cssStringVar: string= 'red size20';
<div [className]="cssStringVar">Test</div>
 
getClass() {
  return 'red';
}
<div [className]="getClass()">getClass</div>

# Conditional (Ternary) Operator.
<div [className]="hasError() ? 'red' : 'size20'"> conditonal operator </div>
```
**Class binding with Class**
```sh 
<div [class.red]="true" [class.size20]="true">Test</div>

# Conditionally binding class
 hasError:false;
<div [class.red]="hasError" [class.size20]="hasError">Test</div>
```

## Style binding Example
```sh
<p [style.color]="'red'">Give me red</p>
<p [style.background-color]="'grey'">some paragraph with grey background</p>
<button [style.border]="'5px solid yellow'">Save</button

#  Conditionally 
<button [style.color]="status=='error' ? 'red': 'blue'">Button 1</button> 

#  Units
The style property name can be written in either dash-case (font-size), as shown in above example, or camelCase (fontSize) as shown below.

<button [style.font-size.px]="'20'" >Big Button</button>
<button [style.fontSize.px]="'20'" >Big Button</button>


# Multiple styles
<p [style.color]="getColor()" 
   [style.font-size.px]="'20'"      
   [style.background-color]="status=='error' ? 'red': 'blue'">
   paragraph with multiple styles
</p>

```

there are alternative binding like **ngClass** , **ngStyle** will learn in directive session 


## From View to Component

### Event Binding
Event binding allows us to bind events such as keystroke, clicks, hover, touche, etc to a method in component. It is one way from view to component. By tracking the user events in the view and responding to it, we can keep our component in sync with the view. For Example, when the user changes to an input in a text box, we can update the model in the component, run some validations, etc. When the user submits the button, we can then save the model to the backend server.

**Syntax**
```sh
(target-event)="TemplateStatement"

# We enclose the target event name in parentheses on the left side
# Assign it to a template statement within a quote on the right side

<button (click)="onSave()">Save</button>
```

**Example**
```sh
<button (click)="clickMe()">Click Me</button>
<p>You have clicked {{clickCount}}</p>

clickCount=0
  clickMe() {
    this.clickCount++;
  }
```
**Alternative**
```sh
# on- alter to ()
<button on-click="clickMe()">Click Me</button>
# Multiple event handlers
<button (click)="clickMe() ; clickCount1=clickCount">Click Me</button>
# $event Payload
<input (input)="handleInput($event)">
<p>You have entered {{value}}</p>

value=""
handleInput(event) {
  this.value = (event.target as HTMLInputElement).value;
}
# Template reference variable
<input #el (input)="handleInput1(el)">
<p>You have entered {{val}}</p>

val="";
handleInput1(element) {
  this.val=element.value;
}

# Key event filtering (with key.enter)
<input (keyup)="value1= $any($event.target).value" />
<p>You entered {{value1}}</p>

<input (keyup.enter)="value2=$any($event.target).value">
<p>You entered {{value2}}</p>

<input (keyup.enter)="value3=$any($event.target).value" (keyup.escape)="$any($event.target).value='';value3=''">
<p>You entered {{value3}}</p>

# Note that we are using $any to cast $event.target to any type.
# Otherwise, the typescript will raise the error Property ‘value’
# does not exist on type ‘EventTarget’ Error in Angular

# key combination
<input (keyup.control.shift.enter)="value4=$any($event.target).value">
<p>You entered {{value4}}</p>

```

Learn all event from https://developer.mozilla.org/en-US/docs/Web/Events

### Custom events with EventEmitter
Directives & components can also raise events with EventEmitter. Using EventEmiiiter you can create a property and raise it using the EventEmitter.emit(payload). The Parent component can listen to these events using the event binding and also read the payload using the $event argument.


## Two way data binding

Two way data binding means that changes made to our model in the component are propagated to the view and that any changes made in the view are immediately updated in the underlying component data.

Two way data binding is useful in data entry forms. Whenever a user makes changes to a form field, we would like to update our model. Similarly, when we update the model with new data, we would like to update the view as well

**The two way data binding is nothing but both property binding & event binding applied together**
```sh
property binding + event binding = Two way data binding
```

**Example** 

```sh
<input type="text" [value]="name" (input)="name=$event.target.value">
<p> You entered {{name}}</p>
<button (click)="clearName()">Clear</button>

 name=""
 clearName() {
   this.name="";
 }
```
// Fix error from above code

### Two-way binding syntax

[()] - Banana in a box syntax, The square indicates the Property binding & parentheses indicates the event binding.
```sh
<someElement [(someProperty)]="value"></someElement>
```

### What is ngModel

The Angular uses the ngModel directive to achieve the two-way binding on HTML Form elements. It binds to a form element like input, select, selectarea. etc.

Internally It uses the ngModel in property, binding to bind to the value property and ngModelChange which binds to the input event.

```sh
<input type="text" name="value" [(ngModel)]="value">

# Import FormsModule app.module.ts
import { FormsModule } from '@angular/forms';

# Template
<input type="text" name="value" [(ngModel)]="value">
<p> You entered {{value}}</p>
<button (click)="clearValue()">Clear</button>

# Component
value="";
 clearValue() {
   this.value="";
 }

```

### Custom Two-way binding

```sh
# New Counter Component
import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
 selector: 'counter',
 template: `
     <div>
       <p>
         Count: {{ count }}
         <button (click)="increment()">Increment</button>
       </p>
     </div>
   `
})
export class CounterComponent {
 
  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter<number>();
 
  increment() {
   this.count++;
   this.countChange.emit(this.count);
 }
}

# Main Component
<counter [(count)]="count"></counter>
<p> Current Count {{count}}</p>
<button (click)="clearCount()">Clear</button>

count = 0 
clearCount() {
this.count = 0;
}

```
## Child/Nested Components in Angular

The Angular follows component-based Architecture, where each Angular Component manages a specific task or workflow. Each Component is an independent block of the reusable unit.

In real life, angular applications will contain many Angular Components. The task of the root component is to just host these child components. These child components, in turn, can host the more child components creating a Tree-like structure called Component Tree.

### NgModelChange & Change Event in Angular
we will learn it in Form session 

NgModelChange is an Angular specific event, which we can use to listen for changes to the user input. It is the @Output property of the ngModel directive, Hence we need to use it along with it. ngModle raises the NgModelChange event, whenever the model changes. Another way to listen for change is to use the change DOM event. We also learn how to use them and also the difference between change & ngModelChang

https://angular.io/api/forms/NgModel













### Useful links
- https://angular.io/guide/binding-overview
- https://angular.io/guide/binding-syntax
- https://developer.mozilla.org/en-US/docs/Web/Events
- https://angular.io/api/forms/NgModel