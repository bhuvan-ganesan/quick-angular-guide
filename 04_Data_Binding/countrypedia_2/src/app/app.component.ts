import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'countrypedia_1';



x = 0 ;
clearCount() {
this.x = 0;
}
}
