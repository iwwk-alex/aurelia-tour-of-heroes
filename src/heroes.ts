import { Item } from './item';
import { DataService } from './model';
import { autoinject, View } from 'aurelia-framework';
import { ViewModelCreatorService, WrappingCollection } from '@logofx/aurelia-mvvm-plugin';
import { Hero as HeroViewModel } from './hero';

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

  /**
   * refresh
   */
  public refresh(): void {
    //
  }

  created(owningView: View, myView: View): void {
    this.dataService.getHeroes()
        .then(_ => {
        this._heroes = new WrappingCollection(
          item => this.viewModelCreatorService.create<HeroViewModel>(HeroViewModel, item),
          this.dataService.heroes);
        })
        .catch(alert);
  }

  public get heroes(): WrappingCollection {
        return this._heroes;
  }
}
