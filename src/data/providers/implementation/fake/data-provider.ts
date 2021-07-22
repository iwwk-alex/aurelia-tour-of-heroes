import { PersonageDto } from 'data/dto';
import { IDataProvider } from 'data/providers/contracts';

export class DataProvider implements IDataProvider {

  public async getHeroesAsync(): Promise<PersonageDto[]> {
    return await fetch(`./heroes.json`).then(async (response: Response) => {
      const text = await response.text();
      
      const x = JSON.parse(text);
      const r = Object.keys(x).map(item => {
        const d = new PersonageDto();
        d.name = x[item];
        return d;
      });

      return r;
    });
  }

  public async getVillainsAsync(): Promise<PersonageDto[]> {
    throw new Error('Method not implemented.');
  }

}
