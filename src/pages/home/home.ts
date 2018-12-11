import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { WeatherProvider } from "../../providers/weather/weather";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  weather: any;
  location: {
    city: string;
    code: string;
  };

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage: Storage
  ) {}

  ionViewWillEnter() {
    this.storage.get("location").then(val => {
      if (val != null) {
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: "Sofia",
          code: "BG"
        };
      }

      this.weatherProvider
        .getWeather(this.location.city, this.location.code)
        .subscribe(weather => {
          this.weather = weather;
        });
    });
  }
}
