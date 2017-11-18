import {Component, OnInit} from '@angular/core';
import { Router }   from '@angular/router';
import { DatePipe } from '@angular/common';
import { Joke } from './joke'
import { JokeService } from './joke.service'
import { JokeLine } from './joke-line';

@Component({
    selector: 'joke-list',
    templateUrl: './joke-list.component.html',
    providers: [JokeService]
})
export class JokeListComponent implements OnInit { 
    name = 'Joke'; 
    joke: Joke;
    jokes: Joke[];
    constructor(private jokeService: JokeService,
        private router: Router)
    { }
    
    getJokes(): void {
      console.log('In App Component Constructor');
      this.jokeService.getJokes()
       .then(jokes => this.jokes = jokes)
    }
    
    gotoDetail(joke: Joke): void {
        let link = ['/joke', joke.id];
        this.router.navigate(link);
      }

      delete(joke: Joke): void {
          console.log('In joke=list.delete')
        this.jokeService.delete(joke.id)
        .then(() => {this.jokes = this.jokes.filter(j => j !== joke);});
        
      }

      add(): void{
          console.log("in add");

          console.log("add calling create: ");
          this.jokeService.create()
          .then(addedJoke => {console.log("added joke" + addedJoke.name + " " +addedJoke.id); 
                              let link = ['/edit',addedJoke.id];
                              let jokeLine = new JokeLine(addedJoke.id,0,0,false,undefined,undefined);
                              let jokeLines = new Array<JokeLine>(jokeLine);
                              addedJoke.lines = jokeLines;
                         this.router.navigate(link);})
          


      }

      ngOnInit(): void {
        console.log('OnInit')
        this.getJokes();
      }
    }