# 🌤️ Weather App

A modern weather application built with **Angular 19** that provides real-time weather information for any city worldwide. The app dynamically updates its background based on current weather conditions and also supports geolocation for automatic weather detection.

---

## 🚀 Features

- 🔍 **Search by City** – Enter any city name to get current weather data
- 📍 **Geolocation Support** – Automatically detect and display weather for your current location
- 🌡️ **Detailed Weather Info** – Temperature, feels-like, humidity, wind speed & direction
- 🎨 **Dynamic Backgrounds** – Background changes based on weather condition (sunny, cloudy, rainy, clear)
- 🕒 **Local Time Display** – Shows the local time of the searched location
- ⏳ **Loading Spinner** – Visual feedback while fetching data

---

## 🛠️ Tech Stack

| Technology | Version |
|------------|---------|
| Angular | 19.2.x |
| TypeScript | ~5.7.2 |
| Bootstrap | ^5.3.6 |
| RxJS | ~7.8.0 |
| WeatherAPI | REST API |

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Angular CLI](https://angular.io/cli)

```bash
npm install -g @angular/cli
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MALADJI/weather.git
   cd weather
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   ng serve
   ```

4. Open your browser and navigate to `http://localhost:4200`

---

## 📁 Project Structure

```
src/
├── app/
│   ├── weather/
│   │   ├── weather.component.ts       # Weather display component
│   │   ├── weather.component.html     # Weather component template
│   │   ├── weather.component.css      # Weather component styles
│   │   ├── weather.service.ts         # WeatherAPI HTTP service
│   │   └── weather.service.spec.ts    # Service unit tests
│   ├── app.component.ts               # Root component with core logic
│   ├── app.component.html             # Root template
│   ├── app.component.css              # Global component styles
│   └── app.module.ts                  # App module declarations
└── index.html                         # App entry point
```

---

## 🌐 API

This app uses the [WeatherAPI](https://www.weatherapi.com/) to fetch real-time weather data.

### Endpoints Used
- **Current Weather by City**: `/current.json?key=API_KEY&q={city}`
- **Current Weather by Coordinates**: `/current.json?key=API_KEY&q={lat},{lon}`

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `ng serve` | Start development server |
| `ng build` | Build for production |
| `ng test` | Run unit tests |
| `ng build --watch` | Build and watch for changes |

---

## 🧪 Running Tests

```bash
ng test
```

---

## 📄 License

This project is for educational purposes only

---

## 👤 Author

**MALADJI Thabiso**  
GitHub: [@MALADJI](https://github.com/MALADJI)
