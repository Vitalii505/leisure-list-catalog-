import { LeisureList } from "./model";

export class TypeView {
    returnTypes(types: LeisureList): void {
        const type_container = document.getElementById("type-container");
        for (const [key, value] of Object.entries(types)) {
            const type = this.createElement("div", "type", key);
            type_container.append(type);
            type.dataset.name = key;
        };
    };

    actionShowItems(showItems: (id: string) => void): void {
        const type_container = document.getElementById("type-container");
        type_container.addEventListener("click", (event) => {
            if ((event.target as HTMLElement).classList.contains("type")) {
                showItems((event.target as HTMLElement).dataset.name);
            };
        });
    }

    createElement(tag:string, className?: string, text?: string): HTMLElement {
        const tags: HTMLElement = document.createElement(tag);
        if (className) tags.classList.add(className);
        if (text) tags.textContent = text;
        return tags;
    };
}