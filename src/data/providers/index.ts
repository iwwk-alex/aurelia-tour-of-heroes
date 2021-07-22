import { IDataProvider } from 'data/providers/contracts';
import { FrameworkConfiguration } from 'aurelia-framework';
import { fake, real } from './implementation';
import * as environment from '../../../config/environment.json';

export * from './contracts';
export * from './implementation';

export function configure(config: FrameworkConfiguration): void {
  if (environment.data === "fake") {
    config.aurelia.container.registerSingleton(IDataProvider, fake.DataProvider);    
  } else if (environment.data === "real") {
    config.aurelia.container.registerSingleton(IDataProvider, real.DataProvider);
  } else {
    throw new Error('The build configuration is wrong or unsupported. \nCheck your environment[.production].json file[s].')
  }
}
