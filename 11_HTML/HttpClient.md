<div align="center">
  <h1>HTTP Client</h1>
<sub>Author:
<a href="https://www.linkedin.com/in/bhuvanaganesan-l-2209047a" target="_blank">Bhuvan Ganesan</a><br>
</sub>
</div>

## HttpClient

The HttpClient is a separate model in Angular and is available under the @angular/common/http package. The following steps show you how to use the HttpClient in an Angular app.

### Import HttpClient Module in Root Module

We need to import it into our root module app.module. Also, we need to add it to the imports metadata array.

```sh
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
 
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

```sh
# Import Required Module in Component/Service
import { HttpClient } from '@angular/common/http';

# Inject HttpClient service
constructor(public http: HttpClient) {
}

# Call the HttpClient.Get method
public getData() {
  this.HttpClient.get<any[]>(this.baseUrl+'users/'+this.userName+'/repos')
           .subscribe(data => {
               this.repos= data;
           },
           error => {
           }
  );
}

```

### What is Observable?

The Angular HTTPClient makes use of observable. Hence it is important to understand the basics of it

Observable help us to manage async data. You can think of Observables as an array of items, which arrive asynchronously over time.

The observables implement the observer design pattern, where observables maintain a list of dependents. We call these dependents as observers. The observable notifies them automatically of any state changes, usually by calling one of their methods.

Observer subscribes to an Observable. The observer reacts when the value of the Observable changes. An Observable can have multiple subscribers and all the subscribers are notified when the state of the Observable changes.

When an Observer subscribes to an observable, it needs to pass (optional) the three callbacks. next(),  error()  &  complete(). The observable invokes the next() callback, when it receives an value. When the observable completes it invokes the complete() callback. And when the error occurs it invokes the error() callback with details of error and subscriber finishes.

The Observables are used extensively in Angular. The new HTTPClient Module and Event system are all Observable based.

The Observables are proposed feature for the next version of Javascript. The Angular uses a Third-party library called Reactive Extensions or RxJs to implement the Observables.