import { EditableObjectViewModel } from "@logofx/aurelia-mvvm-plugin";
import { autoinject, transient } from "aurelia-dependency-injection";
import { Hero } from "model";

@autoinject
@transient(Item)
export class Item extends EditableObjectViewModel<Hero> {

  constructor(model: Hero) {
    super(model);
  }
  
  protected save(model: Hero): Promise<any> {
    throw new Error("Method not implemented.");
  }
  protected afterSave(model: Hero): Promise<any> {
    throw new Error("Method not implemented.");
  }
  protected discard(model: Hero): Promise<any> {
    throw new Error("Method not implemented.");
  }
  protected showError(error: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
