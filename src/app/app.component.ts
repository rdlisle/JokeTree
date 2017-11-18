import { Component  } from '@angular/core';
import { Joke } from './joke'
import { JokeLine } from './joke-line'

@Component({
  selector: 'my-app',
  template: `<a routerLink="/list">List of Jokes</a>
  <router-outlet></router-outlet>`,
})
export class AppComponent { 
name = 'Angular'; 
constructor()
{ }

}

