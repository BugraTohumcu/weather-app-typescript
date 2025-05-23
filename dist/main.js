var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { InputComponent } from "./components/InputComponent.js";
import { LocationComponent } from "./components/LocationComponent.js";
import { WeatherComponent } from "./components/WeatherComponent.js";
const location = new LocationComponent();
const weather = new WeatherComponent();
new InputComponent((city) => __awaiter(void 0, void 0, void 0, function* () {
    let country = yield location.getLocation(city);
    if (country) {
        yield weather.getWeather(country);
    }
}));
