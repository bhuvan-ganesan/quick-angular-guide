import { Component } from '@angular/core';

@Component({
  selector: "app-country-card-v2",
  template: `<div class="country" >
                  <div class="country__flag" style="background-image: url(&quot;https://flagcdn.com/al.svg&quot;);"></div>
                  <div class="country__name">Albania</div>
    </div>`,
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
  }`]
})
export class CountryCardV2Component {

    constructor(){

    }

}
