import { inject } from 'aurelia-dependency-injection';
import { PersonageDto } from 'data/dto';
import { IDataProvider } from "data/providers/contracts";
import { Hero } from "./hero";

@inject(IDataProvider)
export class DataService {

  public heroes: Hero[] = [];
  private _heroesIsLoading: boolean;

  constructor(private dataProvider: IDataProvider) {}

  public async getHeroes(): Promise<Hero[]> {
    await this.updateLocalHeroes();
    return new Promise(resolve => {
      resolve(this.heroes);
    });
  }

  public async addHero(name: string, description: string): Promise<void> {
      new Promise<void>((resolve) => {  
        
        this.heroes.push(<Hero>{name, description});
        
        resolve();             
      });
    
  }
  public async updateHero(hero: Hero): Promise<void> {
    new Promise<void>((resolve, reject) => {      
      try {
        const idx = this.heroes.indexOf(hero);
        if (idx < 0) {
          throw new Error("Cannot update Hero");
        }

        this.heroes[idx].name = hero.name;
        this.heroes[idx].description = hero.description;
        
        resolve();
      } catch(e) {
        reject(e);
      }

    });
  }

  private async updateLocalHeroes(): Promise<void> {
    this.heroes.splice(0, this.heroes.length);

    if (this._heroesIsLoading) {
      return;
    }

    this._heroesIsLoading = true;

    await this.dataProvider
      .getHeroesAsync()
      .then((heroDtos: PersonageDto[]) => 
        heroDtos.map(heroDto => 
            this.heroes.push(<Hero>{
              name: heroDto.name,
              description: heroDto.description
            })
          )
      )
      .catch(e => { throw e; });

    this._heroesIsLoading = false;
  }
}
