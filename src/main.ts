import { InputComponent } from "./components/InputComponent";
import { LocationComponent } from "./components/LocationComponent";
import { WeatherComponent } from "./components/WeatherComponent";


const location = new  LocationComponent();
const weather = new WeatherComponent();


new InputComponent(async(city:string)=>{
    let country = await location.getLocation(city);
    if(country){
        await weather.getWeather(country)
    }
});

