import { PersonageDto } from '../../dto';

export const IDataProvider = Symbol('IDataProvider');

export interface IDataProvider {

  getHeroesAsync(): Promise<PersonageDto[]>;

  getVillainsAsync(): Promise<PersonageDto[]>;
  
}
