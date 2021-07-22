import { PersonageDto } from 'data/dto';
import { IDataProvider } from 'data/providers/contracts';

export class DataProvider implements IDataProvider {

  public async getHeroesAsync(): Promise<PersonageDto[]> {
    throw new Error('Method not implemented.');
  }

  public async getVillainsAsync(): Promise<PersonageDto[]> {
    throw new Error('Method not implemented.');
  }
}
