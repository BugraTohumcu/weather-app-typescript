var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class WeatherComponent {
    constructor() {
        this.outElement = document.getElementById("result");
    }
    getWeather(country) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `https://api.open-meteo.com/v1/forecast?latitude=${country.latitude}&longitude=${country.longitude}&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&current=temperature_2m,relative_humidity_2m&timezone=auto&forecast_days=1`;
            try {
                let response = yield fetch(url);
                let data = yield response.json();
                let current = data.current;
                this.outElement.innerHTML = `${current.temperature_2m}°C`;
            }
            catch (err) {
                if (err instanceof Error) {
                    alert(err.message);
                    return null;
                }
            }
        });
    }
}
