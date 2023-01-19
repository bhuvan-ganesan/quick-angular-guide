import { Injectable } from '@angular/core';

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseURL: string = "https://restcountries.com/v3.1/";

  constructor(private http: HttpClient) { }

  getAllCountries(): Observable<any> {
    return this.http.get(this.baseURL + 'all')
  }

  getCountriesByRegion(region: String):Observable<any> {
    return this.http.get(this.baseURL+ "subregion/"+ region);
  }

  getCountriesByCode(codes: any):Observable<any> {
    // https://restcountries.com/v3.1/alpha?codes={code},{code},{code}
    let params = new HttpParams()
                .set('codes', codes)
    return this.http.get(this.baseURL+ "alpha", {params});
    // return this.http.get(this.baseURL+ "alpha?codes="+codes);
  }

  getImgFlp(): Observable<any>{
    //  https://api.imgflip.com/get_memes
    return this.http.get('https://api.imgflip.com/get_memes');
  }

}
