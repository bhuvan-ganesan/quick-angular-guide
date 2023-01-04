import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countrypedia_5';

  countries: Country[] = [
    {
      "flag":"https://flagcdn.com/w320/mr.png",
      "name":"Mauritania",

    },
    {
      "flag":"https://flagcdn.com/w320/aw.png",
      "name":"Aruba",

    },
    {
      "flag":"https://flagcdn.com/w320/ar.png",
      "name":"Argentina",

    },
  ]
}

class Country {
  flag!: string;
  name!: string;
}
