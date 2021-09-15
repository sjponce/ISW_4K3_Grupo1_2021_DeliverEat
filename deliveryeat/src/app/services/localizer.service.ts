import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LocalizerService {

  apiKey = 'AIzaSyAOmUoHltvd6KtUc4D5weZwf3beTqdxoVM';

  constructor(private http: HttpClient) { }

  getAddress(lat: number, long: number) {
  return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${this.apiKey}`).pipe(
    map( (resp: any) =>
    {
      console.log(resp);
      
     return resp.results
    }
    )
  );
  }

  getCoords(street: string, number: number, city: string) {
    console.log(street);
    return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${number}+${street}+${city}&key=${this.apiKey}`);
  }
  }
