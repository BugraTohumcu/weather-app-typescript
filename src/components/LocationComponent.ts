import { Country } from "../dto/country";
export class LocationComponent{
    private outElement : HTMLElement;
    constructor(){
        this.outElement = document.getElementById("result") as HTMLElement;
    }

    //Get latitude and longitude by country name
    async getLocation(city: string) : Promise<Country | null> {
        let url= `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
        try{
        this.outElement.innerHTML = "loading..."
        let response = await fetch(url);
        let data = await response.json();
        if(!data.results || data.results === ""){
            alert("Country not found!")
            return;
        }
        return data.results[0];
        }catch(err){
            if(err instanceof Error){
                alert("Network error: "+ err.message)
            }
        }
    }
}