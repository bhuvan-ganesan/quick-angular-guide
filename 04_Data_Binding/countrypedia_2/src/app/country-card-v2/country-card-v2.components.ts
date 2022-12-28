import { Component } from '@angular/core';

@Component({
  selector: "app-country-card-v2",
  template: `<div class="{{divClass}}" >
                  <div class="country__flag" style="background-image: url({{getUrl()}});"></div>
                  <div class="country__name" style.color={{fontColor}}>{{name}}</div>
    </div>
    <p>100x80 = {{100*80}}</p>
    <p>Largest: {{max(100, 200)}}</p>

    <label>Enter Your Name</label>
<input (keyup)="0" #name1>
<p>Welcome {{name1.value}} </p>

<div class="{{divClass}}" >
                  <div class="country__flag" style="background-image: url({{countryData.url}});"></div>
                  <div class="country__name" >{{countryData.name}}</div>
    </div>


    <div [className]="'red'">Test</div>

    <div [className]="'red size20'">Test</div>

    <div [className]="hasError() ? 'red' : 'size20'"> conditional operator </div>

    <div [class.red]="true" [class.size20]="false">Test</div>



    `,
  styles: [`.country {
    color: #495057;
    height: 3.6rem;
    cursor: pointer;
    background-color: #fff;
    border-radius: 3px;
    gap: 1rem;
    text-decoration: none;
    transition: all .3s;
    display: flex;
    overflow: hidden;
    box-shadow: 0 2rem 6rem #0000001a;
}

.country__flag, .country__flag svg {
    width: 4.4rem;
    background-position: 50%;
    background-size: cover;
    border-radius: 3px;
    margin: 0.4rem;
}

.country__name {
    align-self: center;
    font-size: 1.6rem;
}

.country:hover {
    transform: translateY(-3px);
  }
  .red{
    color:red;
  }
  .size20{
    font-size:20px;
  }

  `]
})
export class CountryCardV2Component {

  name:string = 'Albania';
  divClass:string = 'country';
  fontColor:string = 'green';

  countryData = { 
    name: 'Albania',
    url:'https://flagcdn.com/al.svg'
  }
  // countryData = null;

  getUrl(): string{
    return 'https://flagcdn.com/al.svg'
  }
  max(first: number, second: number): number {
    return Math.max(first, second);
  }

  hasError():boolean{
    return true;
  }

    constructor(){

    }

}
