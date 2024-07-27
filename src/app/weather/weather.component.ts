import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css',
  providers: [WeatherService]
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService){}

  ngOnInit(): void {
    debugger;
    let weatherValues = this.weatherService.getWeather().subscribe((response) => {
      console.log(response)
    }, (error) => {
      console.log(error)
    });
  }

}
