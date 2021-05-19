import { LeisureList } from "./model";

export class DescriptionView {
    returnDescription(id, description: LeisureList) {
        const description_container = document.getElementById("description-container");
        for (const [key, value] of Object.entries(description)) {
            for (const i in value) {
                if (id === value[i].genre) {
                    const arrayItems = document.querySelectorAll(".description");
                    if (arrayItems) {
                        for (let i = 0; i < arrayItems.length; i++) {
                            arrayItems[i].remove();
                        };
                    };
                    const details = this.createElement("div", "description");
                    details.textContent = `Название: ${id}, Теги: ${value[i].tags}`;
                    description_container.append(details);
                };
            };
        };
    };

    createElement(tag:string, className?: string, text?: string): HTMLElement {
        const tags: HTMLElement = document.createElement(tag);
        if (className) tags.classList.add(className);
        if (text) tags.textContent = text;
        return tags;
    };
}