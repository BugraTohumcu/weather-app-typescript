export class InputComponent{
    private inputElement : HTMLInputElement;
    private onSubmit:(value:string) => void;

    constructor(onSubmit:(value : string) => void){
        this.inputElement = document.getElementById("country-input") as HTMLInputElement;
        this.onSubmit = onSubmit;
        this.inputElement.addEventListener("keydown",this.submitFunc.bind(this));

    }
    
    //Proccess starts when user hits enter
    async submitFunc(event : KeyboardEvent){
        if(event.key === "Enter"){
            if(this.inputElement.value === ""){
                alert("Please enter a country");
                return null;
            }
            this.onSubmit(this.inputElement.value);
        }
    }
    
}