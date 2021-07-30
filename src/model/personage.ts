import { ValidationRules } from 'aurelia-validation';
import { EditableModel } from '@logofx/aurelia-mvvm-plugin';

export abstract class Personage extends EditableModel<string> {

  private _name = '';
  private _description = '';

  constructor () {
    super();

    this.rules = ValidationRules
        .ensure((p: Personage) => p.name).displayName('Name').required().withMessage('The value is mandatory')
        .rules;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
    this.makeDirty();
  }

  public get description(): string {
    return this._description;
  }

  public set description(value: string) {
    this._description = value;
    this.makeDirty();
  }
}
