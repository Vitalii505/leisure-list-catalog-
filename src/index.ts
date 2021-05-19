import { Model } from "./lib/model";
import { ItemView } from "./lib/itemView";
import { Controller } from "./lib/controller";
import { TypeView } from "./lib/typeView";
import { DescriptionView } from "./lib/descriptionView";
import { FormView } from "./lib/formView";


const SetLeisureList = new Controller(new Model(), new ItemView(), new TypeView(), new DescriptionView(), new FormView());


