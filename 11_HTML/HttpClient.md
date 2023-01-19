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

### Observables Operators

Operators are methods that operate on an Observable and return a new observable. Each Operator modifies the value it receives. These operators are applied one after the other in a chain.

The RxJs provides several Operators, which allows you to filter, select, transform, combine and compose Observables. Examples of Operators are map, filter, take, merge, etc

### How to use RxJs

The RxJs is a very large library. Hence Angular exposes a stripped-down version of Observables. You can import it using the following import statement

```sh
import { Observable } from 'rxjs';
```

The above import imports only the necessary features. It does not include any of the Operators.

To use observables operators, you need to import them. The following code imports the map & catchError operators.

```sh
import { map, catchError } from 'rxjs/operators';
```

### HTTP GET

The HttpClient.get sends the HTTP Get Request to the API endpoint and parses the returned result to the desired type. By default, the body of the response is parsed as JSON. If you want any other type, then you need to specify explicitly using the observe & responseType options.

#### Syntax

```sh
get(url: string, 
      options: {
          headers?: HttpHeaders | { [header: string]: string | string[]; };
          params?: HttpParams | { [param: string]: string | string[]; };
          observe?: "body|events|response|";
          responseType: "arraybuffer|json|blob|text";
          reportProgress?: boolean; 
          withCredentials?: boolean;}
     ): Observable<>
```

#### Options

**headers** It allows you to add HTTP headers to the outgoing requests. 

**observe** The HttpClient.get method returns the body of the response parsed as JSON (or type specified by the responseType). Sometimes you may need to read the entire response along with the headers and status codes. To do this you can set the observe property to the response.

*The allowed options are*

- a **response** which returns the entire response
- **body** which returns only the body
- **events** which return the response with events.


**params** Allows us to Add the URL parameters or Get Parameters to the Get Request

**reportProgress** This is a boolean property. Set this to true, if you want to get notified of the progress of the Get Request. This is a pretty useful feature when you have a large amount of data to download (or upload) and you want the user to notify of the progress.

**responseType** Json is the default response type. In case you want a different type of response, then you need to use this parameter. The Allowed Options are arraybuffer, blob, JSON, and text. 

**withCredentials** It is of boolean type. If the value is true then HttpClient.get will request data with credentials (cookies)

### Example 

app.module.ts

```sh
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
 
import { AppComponent } from './app.component';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

countries.service.ts

```sh
import { Injectable } from '@angular/core';
 
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
 
 
@Injectable({
  providedIn: 'root'
})
export class CountryService {
 
  baseURL: string = "https://restcountries.com/v3.1/";
 
  constructor(private http: HttpClient) {
  }
 
  getAllCountries(): Observable<any> {
    return this.http.get(this.baseURL + 'all')
  }
 
}
```
AppComponent

```sh
import { Component } from '@angular/core';
 
import { CountryService } from './countries.service.ts';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  userName: string = "Countries List"
 
  loading: boolean = false;
  errorMessage:any;
  countries:any = [];
 
  constructor(private countryService: CountryService) {
  }
 
  public getCountries() {
    this.loading = true;
    this.errorMessage = "";
    this.countryService.getAllCountries()
      .subscribe(
        (response) => {                           //next() callback
          console.log('response received')
          this.countries = response; 
        },
        (error) => {                              //error() callback
          console.error('Request failed with error')
          this.errorMessage = error;
          this.loading = false;
        },
        () => {                                   //complete() callback
          console.error('Request completed')      //This is actually not needed 
          this.loading = false; 
        })
  }
}

#template

<table class='table'>
  <thead>
    <tr>
      <th>Name</th>
      <th>Population</th>
      <th>Code</th>
      <th>Continent</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor="let c of countries;">
      <td>{{c.name.official}}</td>
      <td>{{c.population}}</td>
      <td>{{c.fifa}}</td>
      <td>{{c.continents}}</td>
    </tr>
  </tbody>
</table>
```


### HTTP Post

The HttpClient.post() sends the HTTP POST request to the endpoint. Similar to the get(), we need to subscribe to the post() method to send the request. The post method parsed the body of the response as JSON and returns it. This is the default behavior. If you want any other type, then you need to specify explicitly using the observe & responseType options.

#### Syntax

```sh
post(url: string, 
     body: any, 
     options: { 
        headers?: HttpHeaders | { [header: string]: string | string[]; }; 
        observe?: "body|events|response|"; 
        params?: HttpParams | { [param: string]: string | string[]; }; 
        reportProgress?: boolean; 
        responseType: "arraybuffer|json|blob|text"; 
        withCredentials?: boolean; 
     }
): Observable
```

**Sample**

```sh
addPerson(person:Person): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    this.http.post(this.baseURL + 'people', body,{'headers':headers , observe: 'response'})
      .subscribe(
       response=> {
            console.log("POST completed sucessfully. The response received "+response);
        },
        error => {
            console.log("Post failed with the errors");
        },
        () => {
            console.log("Post Completed");
        }
}
```

### HTTP PUT

The HttpClient.put() sends the HTTP PUT request to the endpoint. The syntax and usage are very similar to the HTTP POST method.

```sh
put(url: string, 
     body: any, 
     options: { 
        headers?: HttpHeaders | { [header: string]: string | string[]; }; 
        observe?: "body|events|response|"; 
        params?: HttpParams | { [param: string]: string | string[]; }; 
        reportProgress?: boolean; 
        responseType: "arraybuffer|json|blob|text"; 
        withCredentials?: boolean; 
     }
): Observable
```

### HTTP PATCH

The HttpClient.patch() sends the HTTP PATCH request to the endpoint. The syntax and usage are very similar to the HTTP POST method.

```sh
patch(url: string, 
     body: any, 
     options: { 
        headers?: HttpHeaders | { [header: string]: string | string[]; }; 
        observe?: "body|events|response|"; 
        params?: HttpParams | { [param: string]: string | string[]; }; 
        reportProgress?: boolean; 
        responseType: "arraybuffer|json|blob|text"; 
        withCredentials?: boolean; 
     }
): Observable
```

### HTTP DELETE

The HttpClient.delete() sends the HTTP DELETE request to the endpoint. The syntax and usage are very similar to the HTTP GET method.

```sh
delete(url: string, 
      options: {
          headers?: HttpHeaders | { [header: string]: string | string[]; };
          params?: HttpParams | { [param: string]: string | string[]; };
          observe?: "body|events|response|";
          responseType: "arraybuffer|json|blob|text";
          reportProgress?: boolean; 
          withCredentials?: boolean;}
     ): Observable<>
```


### URL Parameters, Query Parameters, Httpparams In Angular HttpClient

URL Parameters or Query Parameters along with the HTTP Request using the HttpClient in Angular. We will be using HttpParams to add the URL Parameter, which is then used by the GET, POST, PUT & PATCH etc methods to send an HTTP request to the back end API. The URL Parameters also are known by the name Query strings, Query Params, Get Params, etc.

```sh
https://restcountries.com/v3.1/alpha?codes=col,pe,at
```

```sh
  getByCode(codes: Array): Observable<any[]> {
 
 
        let params = new HttpParams()
                .set('codes', codes)
   
        console.log(params.toString());
 
        return this.httpClient.get<repos[]>(this.baseURL + 'alpha/' , {params});
   }
```


