import { Component } from '@angular/core';
import { WeatherService } from './weather/weather.service';

@Component({
  selector: 'app-root',
  template: `
    <div [ngClass]="backgroundClass" style="min-height: 100vh; padding: 30px; color: white; text-align: center;">
      <input [(ngModel)]="city" placeholder="Enter city" />
      <button (click)="fetchWeather()">Get Weather</button>
      <button (click)="getUserLocation()">📍 Use My Location</button>

      <div *ngIf="loading" class="spinner"></div>

      <div *ngIf="weather && !loading" style="margin-top: 20px;">
        <h2>{{ weather.location.name }}, {{ weather.location.country }}</h2>
        <p>🕒 Local Time: {{ weather.location.localtime }}</p>
        <h3>{{ weather.current.condition.text }}</h3>
        <img [src]="'https:' + weather.current.condition.icon" alt="weather icon" />
        <p>Temperature: {{ weather.current.temp_c }}°C</p>
        <p>Feels like: {{ weather.current.feelslike_c }}°C</p>
        <p>Humidity: {{ weather.current.humidity }}%</p>
        <p>Wind: {{ weather.current.wind_kph }} kph ({{ weather.current.wind_dir }})</p>
      </div>
    </div>
  `,
  standalone: false,  // Only needed if using standalone components
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';
  city: string = '';
  weather: any;
  loading: boolean = false;
  backgroundClass: string = 'default-bg';

  constructor(private weatherService: WeatherService) {}

  fetchWeather() {
    this.loading = true;
    this.weatherService.getWeather(this.city).subscribe({
      next: data => {
        this.weather = data;
        this.updateBackground(data.current.condition.text);  // 🌤️
        this.loading = false;
      },
      error: err => {
        console.error('Error:', err);
        this.loading = false;
      }
    });
  }

  fetchWeatherByCoordinates(lat: number, lon: number) {
    this.loading = true;
    this.weatherService.getWeatherByCoordinates(lat, lon).subscribe({
      next: data => {
        this.weather = data;
        this.city = data.location.name;  // Update input with the city name
        this.updateBackground(data.current.condition.text);
        this.loading = false;
      },
      error: err => {
        console.error('Error:', err);
        this.loading = false;
      }
    });
  }



  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.fetchWeatherByCoordinates(lat, lon);
      }, error => {
        console.error('Geolocation error:', error);
        this.fetchWeather();  // fallback to manual input
      });
    } else {
      console.warn('Geolocation not supported');
      this.fetchWeather();
    }
  }

  formatLocalTime(dateTime: string): string {
    const [dateStr, timeStr] = dateTime.split(' ');
    const date = new Date(dateStr + 'T' + timeStr);
    return date.toLocaleString('en-ZA', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }


  updateBackground(condition: string) {
    const lower = condition.toLowerCase();
    if (lower.includes('sunny')) {
      this.backgroundClass = 'sunny-bg';
    } else if (lower.includes('cloud')) {
      this.backgroundClass = 'cloudy-bg';
    } else if (lower.includes('rain')) {
      this.backgroundClass = 'rainy-bg';
    } else if (lower.includes('clear')) {
      this.backgroundClass = 'clear-bg';
    } else {
      this.backgroundClass = 'default-bg';
    }
  }
}

