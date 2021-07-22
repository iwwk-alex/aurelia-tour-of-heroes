import { PersonageDto } from 'data/dto';
import { IDataProvider } from 'data/providers/contracts';

export class DataProvider implements IDataProvider {

  public async getHeroesAsync(): Promise<PersonageDto[]> {
    return await fetch(`./heroes.json`)
                  .then(async (response: Response) => 
                          (await response.json()).map(item => <PersonageDto>item));
  }

  public async getVillainsAsync(): Promise<PersonageDto[]> {
    throw new Error('Method not implemented.');
  }

}
