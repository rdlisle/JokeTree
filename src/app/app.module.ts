import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here

import { RouterModule }   from '@angular/router';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { JokeComponent }  from './joke.component';
import { JokeListComponent }  from './joke-list.component';
import { EditJokeComponent }  from './edit-joke.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule,
      RouterModule.forRoot([
  { path: 'joke', component: JokeComponent  },
  { path: 'joke/:id', component: JokeComponent  },
  { path: 'list', component: JokeListComponent  },
  { path: 'edit/:id', component: EditJokeComponent  },
     ]),
    InMemoryWebApiModule.forRoot(InMemoryDataService),],
  declarations: [ AppComponent, JokeComponent, JokeListComponent, EditJokeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
