import { Hero } from "./hero";

export class DataService {

  public heroes: Hero[] = [];

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
}
