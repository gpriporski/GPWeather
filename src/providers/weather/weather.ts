import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = "84bb0f03c43076dbd4e0e0e86a098feb";
  url;

  constructor(public http: HttpClient) {
    console.log("Hello WeatherProvider Provider");
    this.url = "https://api.openweathermap.org/data/2.5/weather?q=";
  }

  getWeather(city, code) {
    return this.http.get(this.url+city+','+code+'&units=metric&APPID='+this.apiKey)
    .map((res: Response) => res);
  }
}
