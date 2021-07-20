import { EditableObjectViewModel } from "@logofx/aurelia-mvvm-plugin";
import { Hero } from "model";

export class Item extends EditableObjectViewModel<Hero> {
  
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
