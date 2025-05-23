import { Country } from "../dto/country";
import { Current } from "../dto/current";
export class WeatherComponent{
    private outElement: HTMLElement;
    constructor(){
        this.outElement = document.getElementById("result");
    }
    async getWeather(country:Country){
        let url = `https://api.open-meteo.com/v1/forecast?latitude=${country.latitude}&longitude=${country.longitude}&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&current=temperature_2m,relative_humidity_2m&timezone=auto&forecast_days=1`;
        try{
            let response = await fetch(url);
            let data = await response.json();
            let current = data.current as Current;
            this.outElement.innerHTML = `${current.temperature_2m}°C`;
        }catch(err){
            if(err instanceof Error){
                alert(err.message);
                return null;
            }
        }
        
    }
}