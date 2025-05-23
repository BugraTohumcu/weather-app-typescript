var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class InputComponent {
    constructor(onSubmit) {
        this.inputElement = document.getElementById("country-input");
        this.onSubmit = onSubmit;
        this.inputElement.addEventListener("keydown", this.submitFunc.bind(this));
    }
    //Proccess starts when user hits enter
    submitFunc(event) {
        return __awaiter(this, void 0, void 0, function* () {
            if (event.key === "Enter") {
                if (this.inputElement.value === "") {
                    alert("Please enter a country");
                    return null;
                }
                this.onSubmit(this.inputElement.value);
            }
        });
    }
}
