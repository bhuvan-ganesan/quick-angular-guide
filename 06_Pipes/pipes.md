<div align="center">
  <h1>Pipes</h1>
<sub>Author:
<a href="https://www.linkedin.com/in/bhuvanaganesan-l-2209047a" target="_blank">Bhuvan Ganesan</a><br>
</sub>
</div>

## What is Angular Pipes?
Angular Pipes takes data as input and formats or transform the data to display in the template. We use them to change the appearance of the data before presenting it to the user. The most common use case of pipes is displaying the dates in the correct format as per the user’s locale.

Where

**Expression**: is the expression, which you want to transform
**|** : is the Pipe Character
**pipeOperator** : name of the Pipe
**pipeArguments**: arguments to the Pipe

**Syntax**

```sh
Expression | pipeOperator[:pipeArguments]

{{toDate | date}}
```

**Pipes Example**

```sh
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
@Component({
    selector: 'app-root',
    template: `<p> Unformatted date : {{toDate }} </p>
                  <p> Formatted date : {{toDate | date}} </p>` 
}) 
export class AppComponent 
{ 
    title: string = 'pipe Example' ; 
    toDate: Date = new Date(); 
}

# Pass arguments to pipes
{{toDate | date:'medium'}}

# Chaining Pipes
toDate | date | uppercase
```

### Built-in pipes
Date Pipe, Uppercase Pipe, Lowercase Pipe, Number Pipe/ Decimal Pipe, Currency Pipe, and Percent Pipe, etc

Check the angular document on [Pipes API](https://angular.io/api?query=pipe)


### Create Custom Pipe in Angular

To create a custom pipe, first we need to create a pipe class. The pipe class must implement the PipeTransform interface. We also decorate it with @pipe decorator. Give a name to the pipe under name metadata of the @pipe decorator. Finally, we create the transform method, which transforms given value to the desired output

**How to Create Custom Pipes**

To create a Custom Pipe, first, You need to follow these steps

- Create a pipe class
- Decorate the class with @pipe decorator.
- Give a name to the pipe in the name meta data of the @pipe decorator. We will use this name in the template.
- The pipe class must implement the PipeTransform interface. The interfaces contain only one method transform.
- The first parameter to the transform method is the value to be transferred. The transform method must transform the value and return the result. You can add any number of additional arguments to the transform method.
- Declare the pipe class in the Angular Module (app.module.ts)
- Use the custom pipe just as you use other pipes.


Now let us create a Temperature converter pipe, which converts temperature from Celsius to Fahrenheit and vice versa.

Create a new file temp-convertor.pipe.ts file 

```sh
import {Pipe, PipeTransform} from '@angular/core';
 
@Pipe({
    name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {
    transform(value: number, unit: string) {
        if(value && !isNaN(value)) {
            if (unit === 'C') {
                var temperature = (value - 32) /1.8 ;
                return temperature.toFixed(2);
            } else if (unit === 'F'){
                var temperature = (value * 1.8 ) + 32
                return temperature.toFixed(2);
            }
        }
        return;
    }
}

#Import in app.module.ts
@NgModule({
    declarations: [AppComponent,TempConverterPipe],
    imports: [BrowserModule,FormsModule,HttpModule],
    bootstrap: [AppComponent]
})
export class AppModule { }
```
Using custome pipes in template

```sh
# .html file
<div class='card'>
  <div class='card-header'>
    <p>{{title}} </p>
  </div>
  <div class="card-body">
 
    <div class="row">
      <h3>Fahrenheit to Celsius </h3>
    </div>
    <div class="row">
      <p> Fahrenheit : <input type="text" [(ngModel)]="Fahrenheit" /> 
      Celsius : {{Fahrenheit | tempConverter:'C'}} </p>
    </div>
 
    <div class="row">
      <h3>Celsius to Fahrenheit </h3>
    </div>
    <div class="row">
      <p> celsius : <input type="text" [(ngModel)]="celcius" /> 
       Fahrenheit : {{celcius | tempConverter:'F'}} </p>
    </div>
  </div>
</div>

# .ts file 

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
 
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
 
export class AppComponent
{
    title: string = 'Angular Custom Pipe Example' ;
    celcius: number;
    Fahrenheit: number;   
}

```
Study below build in pipes which will help in project development 
- [Date Pipe](https://angular.io/api/common/DatePipe)
- [UpperCase Pipe](https://angular.io/api/common/UpperCasePipe)
- [LowerCase Pipe](https://angular.io/api/common/LowerCasePipe)
- [Slice Pipe](https://angular.io/api/common/SlicePipe)
- [KeyValue Pipe](https://angular.io/api/common/KeyValuePipe)
- [Async Pipe](https://angular.io/api/common/AsyncPipe)




### Useful links
- https://angular.io/api?query=pipe
- https://angular.io/guide/pipes
- https://angular.io/api/common/DatePipe
- https://angular.io/api/common/UpperCasePipe
- https://angular.io/api/common/LowerCasePipe
- https://angular.io/api/common/SlicePipe
- https://angular.io/api/common/KeyValuePipe
- https://angular.io/api/common/AsyncPipe
- https://angular.io/api/core/Pipe
- https://angular.io/api/core/PipeTransform