import { EditableObjectViewModel } from "@logofx/aurelia-mvvm-plugin";
import { autoinject, transient } from "aurelia-dependency-injection";
import { Personage } from "model";

export abstract class Item extends EditableObjectViewModel<Personage> {

  constructor(model: Personage) {
    super(model);
  }

  public edit(): void {
    this.editImplementation();
  }

  protected save(model: Personage): Promise<Personage> {
    return this.internalSave(model);
  }

  protected afterSave(model: Personage): Promise<Personage> {
    return this.internalAfterSave(model);
  }
  
  protected discard(model: Personage): Promise<Personage> {
    return this.internalDiscard(model);
  }
  
  protected showError(error: Error): Promise<Error> {
    return this.internalShowError(error);
  }

  protected abstract internalSave(model: Personage): Promise<Personage>;

  protected abstract internalAfterSave(model: Personage): Promise<Personage>;
  
  protected abstract internalDiscard(model: Personage): Promise<Personage>; 
  
  protected abstract internalShowError(error: Error): Promise<Error>;

  protected abstract editImplementation(): void;
}
