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
**Trackby in ngFor**

We usengFor to display a iterable items like array in a list or tabular format. For Example the following code iterates over the movies collection and displays each movie inside an ul
```sh
 <ul>
    <li *ngFor="let movie of movies">
      {{ movie.title }} - {{movie.director}}
    </li>
  </ul>
```
The Angular creates a li element for each movie. So if there are n number of movies, the angular inserts the n number of li nodes into the DOM

But the data will not remain constant. The user will add a new movie, delete a movie, sort the list in a different order, or simply refresh the movie from the back end. This will force the angular to render the template again.

The easiest way to achieve that is to remove the entire list and render the DOM again. But this is inefficient and if the list is large it is a very expensive process.

To avoid that the Angular uses the object identity to track the elements in the collection to the DOM nodes. Hence when you add an item or remove an item, the Angular will track it and update only the modified items in the DOM.

But if you refresh the entire list from the back end, it will replace the objects in the movie collection with the new objects. Even if the movies are the same, Angular will not be able to detect as the object references have changed. Hence it considers them new and renders them again after destroying the old ones.

Example 
```sh
import { Component, OnInit } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title: string = "Top 5 Movies";
  
  movies=[];
 
  mTitle:string="";
  mDirector:string="";
 
  ngOnInit() {
    this.Refresh();
  }
 
  remove(i) {
    this.movies.splice(i,1);
  }
 
  addMovie() {
    this.movies.push({ title: this.mTitle, director: this.mDirector})
    this.mTitle=""
    this.mDirector=""
  }
 
  Refresh() {
    console.log("refresh")
    this.movies = [
      { title: 'Zootopia', director: 'Byron Howard, Rich Moore'},
      { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder'},
      { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo'},
      { title: 'X-Men: Apocalypse', director: 'Bryan Singer'},
      { title: 'Warcraft', director: 'Duncan Jones'},
    ]
  }
}
 
class Movie {
  title: string;
  director: string;
}



<h1> {{title}} </h1>
 
<ul>
  <li *ngFor="let movie of movies; let i=index;">
    {{i}}. {{ movie.title }} - {{movie.director}} <button (click)="remove(i)">remove</button>
  </li>
</ul>
 
<button (click)="Refresh()">Refresh</button> <br>
 
Title     : <input type="text" [(ngModel)]="mTitle"> 
Director  : <input type="text" [(ngModel)]="mDirector"> 
<button  (click)="addMovie()">Add</button>

```
To Solve above issue of rerender trackBy option that returns a unique id for each item. The ngFor will use the unique id returned by the trackBy function to track the items. Hence even if we refresh the data from the back end, the unique id will remain the same and the list will not be rendered again.

```sh
trackByFn(index, item) {
    return item.title;
  }

 <li *ngFor="let movie of movies; let i=index;trackBy: trackByFn;"> 

# Trackby multiple fields
  trackByFnMultipleFields(index, item) {
    return item.title + item.director;
  }
 <li *ngFor="let movie of movies; let i=index;trackBy: trackByFnMultipleFields;">

```

### Attribute Directives
An Attribute or style directive can change the appearance or behavior of an element.

#### ngModel
The ngModel directive is used the achieve the two-way data binding. We have covered ngModel directive in Data Binding session

#### ngClass
The ngClass is used to add or remove the CSS classes from an HTML element. Using the ngClass one can create dynamic styles in HTML pages

```sh
<element [ngClass]="expression">...</element>

<element [ngClass]="'cssClass1 cssClass2'">...</element>


.red { color: red; }
.size20 { font-size: 20px; }

<div [ngClass]="'red size20'"> Red Text with Size 20px </div>
```

You can also use the ngClass without a square bracket. In that case, the expression is not evaluated but assigned directly to the class attribute. We also need to remove the double quote around the expression as shown below

```sh
<div class="row">     
    <div ngClass='red size20'>Red Text with Size 20px </div> 
</div>
```
**NgClass with Array**
```sh
<element [ngClass]="['cssClass1', 'cssClass2']">...</element>
<div [ngClass]="['red','size20']">Red Text with Size 20px </div>
```
**NgClass with Object**
```sh
<element [ngClass]="{'cssClass1': true, 'cssClass2': true}">...</element>
<div class="row">     
  <div [ngClass]="{'red':true,'size20':true}">Red Text with Size 20px</div>
</div>
```
Same way you can use variable like string and array to pass.

**NgClass with Class Object**

```sh
export class AppComponent
{
    cssClass: CssClass = new CssClass();
}
class CssClass {
  red: boolean= true;
  size20: boolean= true;
}

<div class="row">
      <div [ngClass]="cssClass">
        Red Text with Size 20px : from component as object
      </div>
    </div>
```

#### ngStyle

ngStyle directive allows us to set the many inline style of a HTML element using an expression. The expression can be evaluated at run time allowing us to dynamically change the style of our HTML element.

```sh

<element [ngStyle]="{'styleNames': styleExp}">...</element>
<some-element [ngStyle]="{'font-size': '20px'}">Set Font size to 20px</some-element>

# For Unit as prefixed
<element [ngStyle]="{'styleName.unit': widthExp}">...</element>
<some-element[ngStyle]="{'font-size.em': '3'}">...</some-element>
```
**Change Style Dynamically**
```sh
color: string= 'red';

<input [(ngModel)]="color" /> 
<div [ngStyle]="{'color': color}">Change my color</div>

# Condition
<div [ngStyle]="{'background-color':status === 'error' ? 'red' : 'blue' }"></<div>

# multiple attributes
<p [ngStyle]="{'color': 'purple',
               'font-size': '20px',
               'font-weight': 'bold'}">
     Multiple styles
</p>
```

### Create & Use Custom Directive

The Angular directives help us to extend or manipulate the DOM. We can change the appearance, behavior, or layout of a DOM element using the directives. We will build a four directive example s and show you how to

- Create a custom directive using the @Directive decorator.
- We will create both custom attribute directive & custom Structural directive.
- How to setup selectors
- Pass value to it using the @input.
- How to respond to user inputs,
- Manipulate the DOM element (Change the Appearance) etc.

**Creating Custom Attribute Directive**

Create a new file and name it as tt-class.directive.ts. import the necessary libraries that we need.

```sh
import { Directive, ElementRef, Input, OnInit } from '@angular/core'
 
@Directive({
  selector: '[ttClass]',
})
export class ttClassDirective implements OnInit {
 
  @Input() ttClass: string;
 
  constructor(private el: ElementRef) {
  }
 
  ngOnInit() {
    this.el.nativeElement.classList.add(this.ttClass);
  }
 
}


.blue {
  background-color: lightblue;
}

<button [ttClass]="'blue'">Click Me</button>

# Add in app.module 

@NgModule({
declarations: [
AppComponent,
ttClassDirective
],
```

**Creating Custom Structural Directive**

et us build a Custom Structural directive. Let us mimic the ngIf and create a custom directive, which we name it as ttIf. There is hardly any difference in creating a Attribute or structural directive.

Create a new file and name it as tt-if.directive.ts file and import the relevant modules.

```sh
import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';
 
@Directive({ 
  selector: '[ttIf]' 
})
export class ttIfDirective  {
 
  _ttif: boolean;
 
  constructor(private _viewContainer: ViewContainerRef,
            private templateRef: TemplateRef<any>) {
  }
 
 
  @Input()
  set ttIf(condition) {
    this._ttif = condition
    this._updateView();
  }
 
  _updateView() {
    if (this._ttif) {
      this._viewContainer.createEmbeddedView(this.templateRef);
    }
    else {
      this._viewContainer.clear();
    }
  }
 
}

# Component class
import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = "Custom Directives in Angular";
  show=true;
}

# Template
<h1> {{title}} </h1>
 
Show Me
<input type="checkbox" [(ngModel)]="show">
 
<div *ttIf="show">
  Using the ttIf directive
</div>
 
<div *ngIf="show">
  Using the ngIf directive
</div>

```

Why you need to specify *
Remove the * from our newly created ttIf directive. And you will get the error message

*ERROR NullInjectorError: StaticInjectorError(AppModule)[NgIf -> TemplateRef]:
StaticInjectorError(Platform: core)[NgIf -> TemplateRef]:
NullInjectorError: No provider for TemplateRef!*

We use the *notation to tell Angular that we have a structural directive and we will be manipulating the DOM. It basically tells angular to inject the TemplateRef. To inject the templateRef, the Angular needs to locate the template. The * tells the Angular to locate the template and inject its reference as templateRef


**Custom Directive**
The tooltip directive shows the tip whenever the user hovers over it. The directive uses the HostListener to listen to the mouseenter and mouseleave events.
The showHint method adds a span element into the DOM and sets its top & left position just below the host element. The removeHint removes it from the DOM.

```sh
import { Directive, ElementRef, Renderer2, Input, HostListener } from '@angular/core'
 
@Directive({
  selector: '[ttToolTip]',
})
export class ttTooltipDirective {
 
  @Input() toolTip: string;
 
  elToolTip: any;
 
  constructor(private elementRef: ElementRef,
            private renderer: Renderer2) {
  }
 
  @HostListener('mouseenter') 
  onMouseEnter() {
    if (!this.elToolTip) { this.showHint(); }
  }
 
  @HostListener('mouseleave') 
  onMouseLeave() {
    if (this.elToolTip) { this.removeHint(); }
  }
 
  ngOnInit() {
  }
 
  removeHint() {
    this.renderer.removeClass(this.elToolTip, 'tooltip');
    this.renderer.removeChild(document.body, this.elToolTip);
    this.elToolTip = null;
  }
 
  showHint() {
 
    this.elToolTip = this.renderer.createElement('span');
    const text = this.renderer.createText(this.toolTip);
    this.renderer.appendChild(this.elToolTip, text);
 
    this.renderer.appendChild(document.body, this.elToolTip);
    this.renderer.addClass(this.elToolTip, 'tt-tooltip');
    
    let hostPos = this.elementRef.nativeElement.getBoundingClientRect();
    let tooltipPos= this.elToolTip.getBoundingClientRect();
 
    let top = hostPos.bottom+10 ; 
    let left = hostPos.left;
 
    this.renderer.setStyle(this.elToolTip, 'top', `${top}px`);
    this.renderer.setStyle(this.elToolTip, 'left', `${left}px`);
  }
}

# Add the following CSS Class
.tt-tooltip {
  display: inline-block;
  border-bottom: 1px dotted black; 
  position: absolute;
}

# Template
<button ttToolTip toolTip="Tip of the day">Show Tip</button> 
```

### Useful links
- https://angular.io/api/common/NgIf
- https://angular.io/api/common/NgSwitch
- https://angular.io/api/common/NgSwitchDefault
- https://angular.io/api/common/NgSwitchCase
- https://angular.io/api/common/NgFor
- https://angular.io/api/core/TrackByFunction
- https://angular.io/api/common/NgForOf#change-propagation
- https://angular.io/api/core/Directive