import {Aurelia} from 'aurelia-framework';
import * as environment from '../config/environment.json';
import {PLATFORM} from 'aurelia-pal';
import { GlobalValidationConfiguration, validateTrigger } from 'aurelia-validation';

export function configure(aurelia: Aurelia): void {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName('aurelia-validation'), (config: GlobalValidationConfiguration) => {
      config.defaultValidationTrigger(validateTrigger.changeOrFocusout);
    })
    .feature(PLATFORM.moduleName('model/index'))
    .feature(PLATFORM.moduleName('data/index'))
    .feature(PLATFORM.moduleName('resources/index'));

  aurelia.use.developmentLogging(environment.debug ? 'debug' : 'warn');

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName('aurelia-testing'));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName('app')));
}
