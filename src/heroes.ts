import { Item } from './item';
import { DataService } from './model';
import { autoinject, View } from 'aurelia-framework';
import { ViewModelCreatorService, WrappingCollection } from '@logofx/aurelia-mvvm-plugin';

@autoinject
export class Heroes {
  
  private _heroes: WrappingCollection;

  constructor(private dataService: DataService,
              private viewModelCreatorService: ViewModelCreatorService) {}

  public addHero(): void {
    this.dataService.addHero('Vasya', 'Some desc')
                    .then(() => { /**/ })
                    .catch((e: Error) => alert(e.message));
  }

  created(owningView: View, myView: View): void {
    this._heroes = new WrappingCollection(
      item => this.viewModelCreatorService.create<Item>(Item, item),
      this.dataService.heroes);
  }

  public get heroes(): WrappingCollection {
        return this._heroes;
  }
}
