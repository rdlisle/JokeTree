import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Joke } from './joke'
import { JokeLine } from './joke-line'
import { JokeService } from './joke.service'
import { Router }   from '@angular/router';

@Component({
    selector: 'joke',
    templateUrl: './joke.component.html',
    providers: [JokeService]
})
export class JokeComponent implements OnInit { 
    name = 'Joke'; 
    joke: Joke;
    jokes: Joke[];
    constructor(private jokeService: JokeService, 
                private route: ActivatedRoute,
              private router: Router)
    { }
    
    getJoke(): void {
      console.log('In App Component Constructor');

      this.route.paramMap
      .switchMap((params: ParamMap) => this.jokeService.getJoke(+params.get('id')))
      .subscribe(joke => this.joke = joke);

      //this.jokeService.getJokes()
       //.then(jokesIn => this.setJokes(jokesIn))
    }
    
    gotoEdit(joke: Joke): void {
      let link = ['/edit', joke.id];
      this.router.navigate(link);
    }

      ngOnInit(): void {
        console.log('OnInit')
        this.getJoke();
      }
    }