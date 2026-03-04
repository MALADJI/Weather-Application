import { Component } from '@angular/core';
import { WeatherService } from './weather.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  imports: [
    FormsModule
  ],
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city = '';
  weatherData: any = null;
  loading = false;
  error = '';

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    if (!this.city.trim()) {
      this.error = 'Please enter a city';
      return;
    }

    this.loading = true;
    this.error = '';
    this.weatherData = null;

    this.weatherService.getWeather(this.city).subscribe({
      next: (data: any) => {
        this.weatherData = data;
        this.loading = false;
      },
      error: (err: any) => {
        console.error('Error fetching weather:', err);
        this.error = 'City not found or invalid API key.';
        this.loading = false;
      }
    });
  }
}
