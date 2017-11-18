import {Component, Input, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Joke } from './joke'
import { JokeLine } from './joke-line'
import { JokeService } from './joke.service'

@Component({
    selector: 'edit-joke',
    templateUrl: './edit-joke.component.html',
    providers: [JokeService]
})
export class EditJokeComponent implements OnInit { 
    name = 'Edit Joke'; 
    joke: Joke;
    jokes: Joke[];
    constructor(private jokeService: JokeService, 
                private route: ActivatedRoute,
              private location: Location)
    { }
    
    getJoke(): void {
      console.log('In App Component Constructor');

      if (this.route.params)

      this.route.paramMap
      .switchMap((params: ParamMap) => this.jokeService.getJoke(+params.get('id')))
      .subscribe(joke => {this.joke = joke;
                          if (this.joke.lines == null) {
                            this.joke.lines = new Array<JokeLine>();
                          }});
    }

    moveLine(from  : number, to :number): void {
      this.joke.lines.splice(to, 0, this.joke.lines.splice(from, 1)[0]);
    }
    addLine(): void {
      this.joke.lines[this.joke.lines.length] = new JokeLine(0,this.joke.id,0,false,undefined,undefined);
    }
    removeLine(lineNum: number): void {
      this.joke.lines.splice(lineNum,1);
    }
    goBack(): void {
      this.location.back();
    }
    save(): void {
      console.log("in save");
      console.log(this.joke.addedBy);
      this.jokeService.update(this.joke)
        .then(() => this.goBack());
    }
    
    
      ngOnInit(): void {
        console.log('OnInit');
        this.getJoke();
      }
    }