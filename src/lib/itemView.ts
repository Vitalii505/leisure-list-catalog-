import { LeisureList } from "./model";

export class ItemView {
    private item_container: HTMLElement;
    constructor() {
        this.item_container = this.createElement("div", "item-container");
        document.body.append(this.item_container);
    }
    returnItems(id:string, items: LeisureList): void {
        const itemContainer = document.getElementById("item-container");
        for (const [key, value] of Object.entries(items)) {
            if (key === id) {
                const arrayItems = document.querySelectorAll(".item");
                if (arrayItems) {
                    for (let i = 0; i < arrayItems.length; i++) {
                        arrayItems[i].remove();
                    };
                };
                for (const i in value) {
                    const item = this.createElement("div", "item", value[i].genre);
                    item.dataset.name = value[i].genre;
                    itemContainer.append(item);
                };
            };
        };
    };

    actionShowDescription(showDescription: (id: string) => void): void {
        const item_container = document.getElementById("item-container");
        item_container.addEventListener("click", (event) => {
            if ((event.target as HTMLElement).classList.contains("item")) {
                showDescription((event.target as HTMLElement).dataset.name);
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