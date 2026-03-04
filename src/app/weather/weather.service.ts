import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '90780d081e4d4eaf9f274158252605'; // Replace this with your actual key
  private apiUrl = 'https://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient) {}

  // 🔍 Fetch by city name
  getWeather(city: string): Observable<any> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', city)
      .set('aqi', 'no');

    return this.http.get(this.apiUrl, { params });
  }

  // 📍 Fetch by coordinates
  getWeatherByCoordinates(lat: number, lon: number): Observable<any> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', `${lat},${lon}`)
      .set('aqi', 'no');

    return this.http.get(this.apiUrl, { params });
  }
}
