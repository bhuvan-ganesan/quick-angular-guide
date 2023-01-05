import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = "Top 5 Movies";
  
  movies: any=[];
 
  mTitle:string="";
  mDirector:string="";

  cssClass: CssClass = new CssClass();
  status:string = 'error';
  color: string= 'red';
 
  ngOnInit() {
    this.Refresh();
  }
 
  remove(i: any) {
    this.movies.splice(i,1);
  }
  
fg(i: any){
  return ''+(i+1);
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

  trackByFn(index: any, item: {
    director: any; title: any; 
}) {
    return item.title + item.director;
  }


}

class Movie {
  title!: string;
  director!: string;
}

class CssClass {
  red: boolean= true;
  size20: boolean= false;
}
