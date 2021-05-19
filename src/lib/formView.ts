import { LeisureList } from "./model";

export class FormView {
    getSelector(selector: string) {
        const element = document.querySelector(selector);
        return element;
    };

    addElement(elements: LeisureList): void {
        const button = this.getSelector(".btn");
        button.addEventListener('click', (event) => {
            const id_input = this.getSelector("#id-form");
            const genre_input = this.getSelector("#title-form");
            const tags_input = this.getSelector("#tags-form");
            const select_input = this.getSelector("#select");

            if ((<HTMLInputElement>id_input).value != "" &&
                (<HTMLInputElement>genre_input).value != "" &&
                (<HTMLInputElement>tags_input).value != ""
            ) {
                const input_elements = {
                    id: (<HTMLInputElement>id_input).value,
                    genre: (<HTMLInputElement>genre_input).value,
                    tags: [`#${(<HTMLInputElement>tags_input).value}`],
                };
                switch ((<HTMLInputElement>select_input).value) {
                    case "films":
                        elements.films.push(input_elements);
                        break;
                    case "books":
                        elements.films.push(input_elements);
                        break;
                    case "podcast":
                        elements.podcast.push(input_elements);
                        break;
                    case "music":
                        elements.music.push(input_elements);
                        break;
                };
                const arrayItems = document.querySelectorAll(".item");
                if (arrayItems) {
                    for (let i = 0; i < arrayItems.length; i++) {
                        arrayItems[i].remove();
                    };
                };
                if (this.getSelector("#warning")) {
                    this.getSelector("#warning").remove();
                };
            } else {
                const warning = document.createElement("p");
                warning.textContent = "Fill in all the fields !";
                warning.style.color = "red";
                warning.style.textAlign = "center";
                warning.id = "warning";
                this.getSelector("#input-form").append(warning);
            }
        });
    };
} 