import { Model } from "./model";
import { TypeView } from "./typeView";
import { ItemView } from "./itemView";
import { DescriptionView } from "./descriptionView";
import { FormView } from "./formView";

export class Controller {
    model: Model;
    itemView: ItemView;
    typeView: TypeView;
    descriptionView: DescriptionView;
    formView: FormView;
    constructor(model: Model, itemView: ItemView, typeView: TypeView, descriptionView: DescriptionView, formView: FormView) {
        this.model = model;
        this.itemView = itemView;
        this.typeView = typeView;
        this.descriptionView = descriptionView;
        this.formView = formView;
        this.typeView.returnTypes(this.model.getData());
        this.typeView.actionShowItems(this.SetShowItems);
        this.formView.addElement(this.model.getData());
    };
    SetShowItems = (id: string): void => {
        this.itemView.returnItems(id, this.model.getData());
        this.itemView.actionShowDescription(this.SetShowDescription);
    };
    SetShowDescription = (id: string): void => {
        this.descriptionView.returnDescription(id, this.model.getData());
    };
}