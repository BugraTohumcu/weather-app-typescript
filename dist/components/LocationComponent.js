var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class LocationComponent {
    constructor() {
        this.outElement = document.getElementById("result");
    }
    //Get latitude and longitude by country name
    getLocation(city) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}`;
            try {
                this.outElement.innerHTML = "loading...";
                let response = yield fetch(url);
                let data = yield response.json();
                if (!data.results || data.results === "") {
                    alert("Country not found!");
                    return;
                }
                return data.results[0];
            }
            catch (err) {
                if (err instanceof Error) {
                    alert("Network error: " + err.message);
                }
            }
        });
    }
}
