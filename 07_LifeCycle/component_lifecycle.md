<div align="center">
  <h1>Component Life Cycle Hook</h1>
<sub>Author:
<a href="https://www.linkedin.com/in/bhuvanaganesan-l-2209047a" target="_blank">Bhuvan Ganesan</a><br>
</sub>
</div>

### Component Life Cycle Hooks in Angular
The life cycle hooks are the methods that angular invokes on the directives and components as it creates, changes, and destroys them. Using lifecycle hooks we can fine-tune the behavior of our components during its creation, updating, and destruction.

### Angular lifecycle hooks
Here is the complete list of life cycle hooks, which angular invokes during the component life cycle. Angular invokes them when a certain event occurs.

- ngOnChanges
- ngOnInit
- ngDoCheck
- ngAfterContentInit
- ngAfterContentChecked
- ngAfterViewInit
- ngAfterViewChecked
- ngOnDestroy

### The Order of Execution of Life Cycle Hooks
The Angular executes the hooks in the following order

**On Component Creation**

1. OnChanges
2. OnInit
3. DoCheck
4. AfterContentInit
5. AfterContentChecked
6. AfterViewInit
7. AfterViewChecked

**When the Component with Child Component is created**

1. OnChanges
2. OnInit
3. DoCheck
4. AfterContentInit
5. AfterContentChecked
   1. Child Component -> OnChanges
   2. Child Component -> OnInit
   3. Child Component -> DoCheck
   4. Child Component -> AfterContentInit
   5. Child Component -> AfterContentChecked
   6. Child Component -> AfterViewInit
   7. Child Component -> AfterViewChecked
6. AfterViewInit
7. AfterViewChecked

**After The Component is Created**

1. OnChanges
2. DoCheck
3. AfterContentChecked
4. AfterViewChecked

**Note**
*The OnChanges hook is fired only if there is an input property defined in the component and it changes. Otherwise, it will never fire*

### Example with all life cycle 

app.component.ts
```sh
import { ChangeDetectionStrategy, Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  changeDetection:ChangeDetectionStrategy.Default,
  template: `
    <h1>Angular Life Cycle Hooks</h1>
    Reference :
    <a
      href="https://www.tektutorialshub.com/angular/angular-component-life-cycle-hooks/#create-the-hook-method"
      >Angular Life Cycle Hooks</a
    >

    <h1>Root Component</h1>


    <br />
    <input
      type="text"
      name="message"
      [(ngModel)]="message"
      autocomplete="off"
    />
    <br />
    <input
      type="text"
      name="content"
      [(ngModel)]="content"
      autocomplete="off"
    />


    <br />
    hide child :
    <input
      type="checkbox"
      name="hideChild"
      [(ngModel)]="hideChild"
      autocomplete="off"
    />

    <br />
    <br />
    <app-child [message]="message" *ngIf="!hideChild">
      <!-- Injected Content -->
      <b> {{ content }} </b>
    </app-child>

    
  `
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  message = "Hello";
  content = "Hello";
  hideChild=false;

  constructor() {
    console.log("AppComponent: Constructed");
  }

  ngOnChanges() {
    console.log("AppComponent:ngOnChanges");
  }

  ngOnInit() {
    console.log("AppComponent:ngOnInit");
  }

  ngDoCheck() {
    console.log("AppComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("AppComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AppComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AppComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AppComponent:AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("AppComponent:ngOnDestroy");
  }

}
```
customer.ts

```sh
export class Customer {
  code:string
  name:string
}
```

child.component.ts

```sh
import { ChangeDetectionStrategy, Component, Input,  OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-child',
  changeDetection:ChangeDetectionStrategy.Default,
  template: `
  
      <h2>child component</h2>

      <br>
      <!-- Data as a input -->
      Message from Parent via @input {{message}}
      <br><br>
      <!-- Injected Content -->
      Message from Parent via content injection
      <ng-content></ng-content>

      <br><br><br>
      Code :
      <input type="text" name="code" [(ngModel)]="customer.code" autocomplete="off">
      <br><br>
      Name:
      <input type="text" name="name" [(ngModel)]="customer.name" autocomplete="off">

      <app-grand-child [customer]="customer"></app-grand-child>
  
  `
  
})
export class ChildComponent {

  @Input() message:string

  customer:Customer = new Customer()


constructor() {
    console.log("  ChildComponent:Constructed");
  }

  ngOnChanges() {
    console.log("  ChildComponent:ngOnChanges");
  }

  ngOnInit() {
    console.log("  ChildComponent:ngOnInit");
  }

  ngDoCheck() {
    console.log("  ChildComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("  ChildComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("  ChildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("  ChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("  ChildComponent:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("  ChildComponent:ngOnDestroy");
  }

}
```
grand-child.component.ts

```sh
import { ChangeDetectionStrategy, Component, Input,  OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-grand-child',
  changeDetection:ChangeDetectionStrategy.Default,
  template: `
  
      <h3>grand child component </h3>

      <br>
      Name {{customer.name}}
  
  `,
})
export class GrandChildComponent {


  @Input() customer:Customer
  
  constructor() {
    console.log("    GrandChildComponent: Constructed");
  }

  ngOnChanges() {
    console.log("    GrandChildComponent:ngOnChanges");
  }

  ngOnInit() {
    console.log("    GrandChildComponent:ngOnInit");
  }


  ngDoCheck() {
    console.log("    GrandChildComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("    GrandChildComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("    GrandChildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("    GrandChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("    GrandChildComponent:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("    GrandChildComponent:ngOnDestroy");
  }
 


}

```

app.module.ts

```sh
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { GrandChildComponent } from './grand-child.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ChildComponent, GrandChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

```
