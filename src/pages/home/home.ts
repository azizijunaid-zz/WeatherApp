import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  result = {};
  constructor(public navCtrl: NavController) {
    this.getWeather(24.877878, 67.068462);
  }


  getWeather(latitude, longitude) {

    // Get a free key at http://openweathermap.org/. Replace the "Your_Key_Here" string with that key.
    var OpenWeatherAppKey = "afaf71864d24af1b5dd03ce4b74f59d1";

    var queryString =
      'http://api.openweathermap.org/data/2.5/weather?lat='
      + latitude + '&lon=' + longitude + '&appid=' + OpenWeatherAppKey + '&units=imperial';

    $.getJSON(queryString, function (results) {

        if (results.weather.length) {

            $.getJSON(queryString, function (results) {

                if (results) {
                  console.log('result ' +  results.weather)
                  this.result = results;

                    // $('#description').text(results.name);
                    // $('#temp').text(results.main.temp);
                    // $('#wind').text(results.wind.speed);
                    // $('#humidity').text(results.main.humidity);
                    // $('#visibility').text(results.weather[0].main);

                    // var sunriseDate = new Date(results.sys.sunrise);
                    // $('#sunrise').text(sunriseDate.toLocaleTimeString());

                    // var sunsetDate = new Date(results.sys.sunrise);
                    // $('#sunset').text(sunsetDate.toLocaleTimeString());
                }

            });
        }
    }).fail(function () {
        console.log("error getting location");
    });
}

}
