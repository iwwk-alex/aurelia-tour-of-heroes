import { PLATFORM } from 'aurelia-pal';
import { Router, RouterConfiguration } from "aurelia-router";

export class App {
  public title = 'Tour of Heroes';
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router): void {
    
    config.title = 'Tour of Heroes';

    config.map([
      { route: ['', 'heroes'], name: 'heroes', moduleId: PLATFORM.moduleName('./heroes'), nav:true,  title:'Heroes' },
      { route: 'villains', name: 'villains', moduleId: PLATFORM.moduleName('./villains'), nav:true,  title:'Villains' },
      { route: 'about', name: 'about', moduleId: PLATFORM.moduleName('about'), nav:true,  title:'About' }
    ]);

    this.router = router;
  }
}
