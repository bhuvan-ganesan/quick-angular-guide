<div align="center">
  <h1>Angular Routing</h1>
<sub>Author:
<a href="https://www.linkedin.com/in/bhuvanaganesan-l-2209047a" target="_blank">Bhuvan Ganesan</a><br>
</sub>
</div>


# Angular Routing

Routing allows you to move from one part of the application to another part or one View to another View. In Angular, Routing is handled by the Angular Router Module.

The Router is a separate module in Angular. It is in its own library package, @angular/router. The Angular Router provides the necessary service providers and directives for navigating through application views.

Using Angular Router you can

- Navigate to a specific view by typing a URL in the address bar
- Pass optional parameters (query parameters) to the View
- Bind the clickable elements to the View and load the view when the user - performs application tasks
- Handles back and forward buttons of the browser
- Allows you to load the view dynamically
- Protect the routes from unauthorized users using Route Guards

## Components of Angular Router

### Router

An Angular Router is a service (Angular Router API) that enables navigation from one component to the next component as users perform application tasks like clicking on menus links, and buttons, or clicking on the back/forward button on the browser. We can access the router object and use its methods like navigate() or navigateByUrl(), to navigate to a route

### Route

Route tells the Angular Router which view to display when a user clicks a link or pastes a URL into the browser address bar. Every Route consists of a path and a component it is mapped to. The Router object parses and builds the final URL using the Route

### Routes

Routes is an array of Route objects our application supports

### RouterOutlet

The outerOutlet is a directive (<router-outlet>) that serves as a placeholder, where the Router should display the view

### RouterLink

The RouterLink is a directive that binds the HTML element to a Route. Clicking on the HTML element, which is bound to a RouterLink, will result in navigation to the Route. The RouterLink may contain parameters to be passed to the route’s component.

### RouterLinkActive

RouterLinkActive is a directive for adding or removing classes from an HTML element that is bound to a RouterLink. Using this directive, we can toggle CSS classes for active RouterLinks based on the current RouterState

### ActivatedRoute

The ActivatedRoute is an object that represents the currently activated route associated with the loaded Component.

### RouterState

The current state of the router includes a tree of the currently activated routes together with convenience methods for traversing the route tree.

### RouteLink Parameters array

The Parameters or arguments to the Route. It is an array that you can bind to RouterLink directive or pass it as an argument to the Router.navigate method.

### Angular supports two Location Strategies:

**HashLocationStrategy**
Where URL looks like http://localhost:4200/#/product
**PathLocationStrategy**
Where URL looks like http://localhost:4200/product

### PathLocationStrategy Vs HashLocationStrategy

**PathLocationStrategy**
Pros:

- Produces a clear URL like http://example.com/foo
- Supports Server-Side Rendering

**Note** : Server-side Rendering is a technique that renders critical pages on the server that can greatly improve perceived responsiveness when the app first loads

Cons:

- Older browser does not support
- Server Support needed for this to work

**HashLocationStrategy**

Pros:

- Supported by all browsers

Cons:

- Produces a URL like http://example.com/#foo
- Will not Support Server-Side Rendering

<hr>

## How to Setup 

### PathLocationStrategy

The PathLocationStrategy is the default strategy in the Angular application.

To Configure the strategy, we need to add \<base href\> in the \<head\> section of the root page (index.html) of our application

```sh
<base href="/">
```

The Browser uses this element to construct the relative URLs for static resources (images, CSS, scripts) contained in the document.

If you do not have access to \<head\> Section of the index.html, then you can follow either of the two steps

Add the APP_BASE_HREF value as shown in the provider’s section of the root module

```sh
import {Component, NgModule} from '@angular/core';
import {APP_BASE_HREF} from '@angular/common';
 
@NgModule({
providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}]
})
class AppModule {}
```

or use the absolute path for all the static resources like CSS, images, scripts, and HTML files.

### HashLocationStrategy

You can use the HashLocationStrategy by providing the useHash: true in an object as the second argument of the RouterModule.forRoot in the AppModule.

```sh
@NgModule({
declarations: [
    AppComponent,HomeComponent,ContactComponent,ProductComponent,ErrorComponent
],
imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Hashlocationstrategy RouterModule.forRoot(appRoutes, { useHash: true }
],
providers: [ProductService],
bootstrap: [AppComponent]
})
```

### Which Location Strategy to Use

We recommend you use the HTML 5 style (PathLocationStrategy ) as your location strategy.

**Because**

- It produces clean and SEO Friendly URLs that are easier for users to understand and remember.
- You can take advantage of the server-side rendering, which will make our application load faster, by rendering the pages in the server first before delivering them the client
- Use the hash location strategy only if you have to support older browsers.


### Why Lazy load?

The Angular apps get bigger in size as we add more and more features. The Angular Modules help us to manage our app by creating separate modules for each new feature. But, as the app gets bigger in size, slower it loads. That is because of angular loads the entire application upfront.

The slow loading app does not leave a good impression on the user. By Loading only a part of the app (i.e lazy loading), the app appears to run faster to the user. The faster loading app gives you a performance boost and also results in a good user experience.

### How Lazy loading works

In Angular, the Lazy loading works at the module level. i.e. you can lazy load only the Angular Modules. We cannot lazy load the Individual components.

The Lazy loading works via the Angular Router Module. The loadChildren method of the Angular Router is responsible to load the Modules

We define the modules which we want to lazy load, when we define the routes. Starting from the Angular 8, we have a new syntax for lazy loading.

```sh
{path: "admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
```
### Example

CHeck the Example project code 




### Useful links

- https://angular.io/api/router/Router