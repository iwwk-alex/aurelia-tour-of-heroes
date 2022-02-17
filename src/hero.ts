import { PLATFORM } from 'aurelia-pal';
import { Router } from 'aurelia-router';
import {useView} from 'aurelia-framework';
import { Personage } from "model";
import { Item } from "./item";
import { autoinject, transient } from 'aurelia-dependency-injection';


@useView(PLATFORM.moduleName('./edit-item.html'))
@autoinject
@transient(Hero)
export class Hero extends Item {
  
  private readonly _router: Router;

  constructor(model: Personage, router: Router) {
    super(model);

    this._router = router;
  }

  protected internalSave(model: Personage): Promise<Personage> {
    throw new Error("Method not implemented.");
  }

  protected internalAfterSave(model: Personage): Promise<Personage> {
    throw new Error("Method not implemented.");
  }

  protected internalDiscard(model: Personage): Promise<Personage> {
    throw new Error("Method not implemented.");
  }
  
  protected internalShowError(error: Error): Promise<Error> {
    throw new Error("Method not implemented.");
  }

  protected editImplementation(): void {
    this._router.navigateToRoute('edit-hero');
  }
}
