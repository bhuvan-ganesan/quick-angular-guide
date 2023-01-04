<div align="center">
  <h1>Directives</h1>
<sub>Author:
<a href="https://www.linkedin.com/in/bhuvanaganesan-l-2209047a" target="_blank">Bhuvan Ganesan</a><br>
</sub>
</div>

## What is Angular Directive

Angular directive helps us to manipulate the DOM. You can change the appearance, behavior, or layout of a DOM element using the Directives. They help you to extend HTML

There are three kinds of directives in Angular:

- Component Directive
- Structural directives
- Attribute directives

### Component Directive

Components are special directives in Angular. They are the directive with a template (view) We covered how to create Components in Angular session.

The directives that this component going to use are listed here.

**Styles/styleUrls**
The CSS styles or style sheets, that this component needs. Here we can use either external stylesheet (using styleUrls) or inline styles (using Styles). The styles used here are specific to the component

**template/templateUrl**
The HTML template that defines our View. It tells Angular how to render the Component’s view. The templates can be inline (using a template) or we can use an external template (using a templateUrl). The Component can have only one template. You can either use inline template or external template and not both

### Structural Directives

Structural directives can change the DOM layout by adding and removing DOM elements. All structural Directives are preceded by **Asterisk symbol**

#### ngIf

ngIf is an Angular Structural Directive, which allows us to add/remove DOM Element based on some condition. 

**ngIf Syntax**
```sh
<p *ngIf="condition">
    content to render, when the condition is true 
</p>
```
We bind the *ngIf to an expression (a condition in the above example). The expression is then evaluated by the ngIf directive. The expression must return either true or false.

If the expression evaluates to false then the Angular removes the entire element from the DOM. If true it will insert the element into the DOM.

**Hidden attribute Vs ngIf**
```sh
<p [hidden]="condition">
    content to render, when the condition is true 
</p>
```
**Difference**

**ngIf** does not hide the DOM element. It removes the entire element along with its subtree from the DOM. It also removes the corresponding state freeing up the resources attached to the element.

**hidden** attribute does not remove the element from the DOM. But just hides it.

**Logical NOT** (!), you can mimic the else condition as shown here.

```sh
<p *ngIf="!condition">
    content to render, when the condition is false
</p>

````

**ngIf else**

Alternative for Logical NOT is else block

```sh
<div *ngIf="condition; else elseBlock">
    content to render, when the condition is true 
</div>
 
<ng-template #elseBlock>
    content to render, when the condition is false 
</ng-template>
```

**ngIf then else**
You can also define then else block using the ng-template

```sh
<div *ngIf="condition; then thenBlock else elseBlock"> 
    This content is not shown
</div>
 
<ng-template #thenBlock>
    content to render when the condition is true.
</ng-template>
 
<ng-template #elseBlock>
    content to render when condition is false.
</ng-template>
```

**ngIf Example**

app.component.ts
```sh
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ngIf Example' ;
  showMe: boolean;
}
```

app.component.html
```sh
<div class="row">
  Show <input type="checkbox" [(ngModel)]="showMe" />
</div>
 
<h1>ngIf </h1>
 
<p *ngIf="showMe">
  ShowMe is checked
</p>
<p *ngIf="!showMe">
  ShowMe is unchecked
</p>
 
<h1>ngIf Else</h1>
 
<p *ngIf="showMe; else elseBlock1">
  ShowMe is checked
</p>
 
<ng-template #elseBlock1>
  <p>ShowMe is unchecked Using elseBlock</p>
</ng-template>
 
<h1>ngIf then else</h1>
 
<p *ngIf="showMe; then thenBlock2 else elseBlock2">
  This is not rendered
</p>
 
<ng-template #thenBlock2>
  <p>ShowMe is checked Using thenblock</p>
</ng-template>
 
<ng-template #elseBlock2>
  <p>ShowMe is unchecked Using elseBlock</p>
</ng-template>
 
<h1>using hidden </h1>
 
<p [hidden]="showMe">
    content to render, when the condition is true  using hidden property binding
</p>
 
<p [hidden]="!showMe">
    content to render, when the condition is false. using hidden property binding
</p>
```

#### ngSwitch, ngSwitchcase, ngSwitchDefault
ngSwitch is an Angular structural directive, which allows us to add or remove DOM elements. It works in conjunction with ngSwitchcase, & ngSwitchDefault directives. It is similar to the switch statement of JavaScript.

**Syntax**
```sh
<container_element [ngSwitch]="switch_expression">
    <inner_element *ngSwitchCase="match_expresson_1">...</inner_element>
    <inner_element *ngSwitchCase="match_expresson_2">...</inner_element>
    <inner_element *ngSwitchCase="match_expresson_3">...</inner_element>
    <inner_element *ngSwitchDefault>...</element>
</container_element>
```

**ngSwitch**
ngSwitch is bound to container_element like div etc. We assign a switch-expression to the ngSwitch via property binding syntax. Angular evaluates the switch_expression at runtime and based on its value displays or removes the elements from the DOM.

**ngSwitchCase**
ngSwitchCase is bound to an inner_element, which we must place inside the container_element. We use * (Asterisk symbol), because it is a structural directive. We also assign a match_expression, which Angular evaluates at runtime. The Angular displays the inner_element only when the value of the match_expression matches the value of the switch_expression else it is removed from the DOM.

If there is more than one match, then it displays all of them.

**Note** that the ngSwitchCase does not hide the element, but removes them from the DOM.

**ngSwitchDefault**
ngSwitchDefault is also bound to an inner_element, which we must place inside the container_element. But it does not have any match_expression. If none of the ngSwitchCase match_expression matches the switch_expression, then the angular displays the element attached to the ngSwitchDefault

You can place ngSwitchDefault anywhere inside the container element and not necessarily at the bottom.

You are free to add more than one ngSwitchDefault directive. Angular displays all of them.

**Important Points**
- You must place ngSwitchCase & ngSwitchDefault inside the ngSwitch directive
- Angular displays every element, that matches the switch_expression
If there are no matches, angular displays all the elements, which has ngSwitchDefault directive
- You can place one or more than one ngSwitchDefault anywhere inside the container element and not necessarily at the bottom.
- Any element within the ngSwitch statement but outside of any NgSwitchCase or ngSwitchDefault directive is displayed as it is.
- The elements are not hidden but removed from the DOM.
- Angular uses loose equality checks to compare the ngSwitchCase expression with the ngSwitch expression. This means that the empty string "" matches 0.
- You can share the template between multiple ngSwitchCase using the ngTemplateOutlet

**ngSwitch Example**

app.component.ts
```sh
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'ngSwitch Example' ;
  num: number= 0;
}
```

app.component.html
```sh
<div class='card'>
  <div class='card-header'>
    ngSwitch Example
  </div>
  <div class="card-body">
    Input string : <input type='text' [(ngModel)]="num" />
 
    <div [ngSwitch]="num">
      <div *ngSwitchCase="'1'">One</div>
      <div *ngSwitchCase="'2'">Two</div>
      <div *ngSwitchCase="'3'">Three</div>
      <div *ngSwitchCase="'4'">Four</div>
      <div *ngSwitchCase="'5'">Five</div>
      <div *ngSwitchDefault>This is Default</div>
    </div>
  </div>
</div>
```


#### ngFor

ngFor directive iterates over a collection of data like an array, list, etc, and creates an HTML element for each of the items from an HTML template. It helps us to build lists or tables to display tabular data in a nice way. In this tutorial, we will look at the syntax and how to use ngFor to display a list of movies using example code. The ngFor also exports several local variables like Index, First, Last, odd, even & trackby.etc. 

Syntax of ngFor

```sh
<html-element ngFor="let <item> of <items>;”> 
     <html-Template></html-Template>
</html-element>
```

**html-element:**
is the element on which we apply ngFor directive. it repeats the \<html-element\> .. \</html-element\> for each item of the collection.

**\*ngFor :**
The syntax starts with *ngFor. The * here tells us that ngFor is an Angular structural directive.

let \<item\> of \<items\>;
item is the Template input variable. It represents the currently iterated item from the \<items\>. \<items\> is a collection, which we need to show to the user. It is usually a property on your component class and can be anything that you can iterate over. (Usually an array)

The scope of the item is within the \<html-element\>..\</html-element\>. You can access it anywhere within that, but not outside of it.

**ngFor Example**

app.component.ts
```sh
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string ="ngFor Top 5 Movies" ;
   movies: Movie[] =[
 
  {title:'Zootopia',director:'Byron Howard, Rich Moore',cast:'Idris Elba, Ginnifer Goodwin, Jason Bateman',releaseDate:'March 4, 2016'},
  {title:'Batman v Superman: Dawn of Justice',director:'Zack Snyder',cast:'Ben Affleck, Henry Cavill, Amy Adams',releaseDate:'March 25, 2016'},
  {title:'Captain American: Civil War',director:'Anthony Russo, Joe Russo',cast:'Scarlett Johansson, Elizabeth Olsen, Chris Evans',releaseDate:'May 6, 2016'},
  {title:'X-Men: Apocalypse',director:'Bryan Singer',cast:'Jennifer Lawrence, Olivia Munn, Oscar Isaac',releaseDate:'May 27, 2016'},
  {title:'Warcraft',director:'Duncan Jones',cast:'Travis Fimmel, Robert Kazinsky, Ben Foster',releaseDate:'June 10, 2016'},
]
}
class Movie {
  title : string;
  director : string;
  cast : string;
  releaseDate : string;
}
```

app.component.html
```sh
<h1> {{title}} </h1>
 
  <ul>
    <li *ngFor="let movie of movies">
      {{ movie.title }} - {{movie.director}}
    </li>
  </ul>
```
```sh
<div class='panel panel-primary'>
    <div class='panel-heading'>
        {{title}}
    </div>
 
    <div class='panel-body'>
        <div class='table-responsive'>
            <table class='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Director</th>
                        <th>Cast</th>
                        <th>Release Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr *ngFor="let movie of movies;">
                        <td>{{movie.title}}</td>
                        <td>{{movie.director}}</td>
                        <td>{{movie.cast}}</td>
                        <td>{{movie.releaseDate}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
```

### Attribute Directives
An Attribute or style directive can change the appearance or behavior of an element.

**ngModel**
The ngModel directive is used the achieve the two-way data binding. We have covered ngModel directive in Data Binding in Angular Tutorial

**ngClass**
The ngClass is used to add or remove the CSS classes from an HTML element. Using the ngClass one can create dynamic styles in HTML pages


### Useful links
- https://angular.io/api/common/NgIf
- https://angular.io/api/common/NgSwitch
- https://angular.io/api/common/NgSwitchDefault
- https://angular.io/api/common/NgSwitchCase
- https://angular.io/api/common/NgFor
- https://angular.io/api/core/TrackByFunction