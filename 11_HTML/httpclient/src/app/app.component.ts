import { Component, OnInit } from '@angular/core';

import { CountriesService } from './countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'httpclient';

  loading: boolean = false;
  errorMessage:any;
  countries:any = [];
  images:any = [];

  constructor(private countriesService: CountriesService) {
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getCountries();
    
  }

  onClickGet(){
    this.getCountriesByRegion();
  }

  onClickGetCode(){
    this.getCountriesByCode();
  }

  clickGetImgFlp() {
    this.loading = true;
    this.errorMessage = "";
    this.countriesService.getImgFlp().subscribe(
        (response) => {                           //next() callback
          console.log('response received', response)
          this.images = response.data.memes; 
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


  public getCountries() {
    this.loading = true;
    this.errorMessage = "";
    this.countriesService.getAllCountries().subscribe(
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


  public getCountriesByRegion() {
    this.loading = true;
    this.errorMessage = "";
    this.countriesService.getCountriesByRegion('Asia').subscribe(
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

  public getCountriesByCode() {
    this.loading = true;
    this.errorMessage = "";
    this.countriesService.getCountriesByCode(['col','pe','at']).subscribe(
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
