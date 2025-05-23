# Weather App

A simple web application to check the current weather for any city using the [Open-Meteo API](https://open-meteo.com/).

## Features

- Search for a city and get the current temperature.
- Uses Open-Meteo's geocoding and weather APIs.
- Clean, responsive UI.

## Project Structure

```
index.html
style.css
tsconfig.json
src/
  main.ts
  components/
    InputComponent.ts
    LocationComponent.ts
    WeatherComponent.ts
  dto/
    country.ts
    current.ts
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for TypeScript compilation)
- [TypeScript](https://www.typescriptlang.org/)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/weather-app.git
    cd weather-app
    ```

2. Install dependencies (if any).

3. Compile TypeScript:
    ```sh
    npx tsc
    ```

4. Open `index.html` in your browser.

## Usage

- Enter a city name in the input field and press Enter.
- The current temperature will be displayed.

## File Overview

- [`src/main.ts`](src/main.ts): App entry point, initializes components.
- [`src/components/InputComponent.ts`](src/components/InputComponent.ts): Handles user input.
- [`src/components/LocationComponent.ts`](src/components/LocationComponent.ts): Fetches city coordinates.
- [`src/components/WeatherComponent.ts`](src/components/WeatherComponent.ts): Fetches and displays weather data.
- [`src/dto/country.ts`](src/dto/country.ts): Country data interface.
- [`src/dto/current.ts`](src/dto/current.ts): Weather data interface.

## License

MIT