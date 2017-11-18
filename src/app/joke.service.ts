import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
 
import 'rxjs/add/operator/toPromise';

import {Joke} from './joke'
import {JokeLine} from './joke-line'
import { JOKES } from './mock-jokes'
@Injectable()
export class JokeService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private jokesUrl = 'api/jokes';  // URL to web api
 
  constructor(private http: Http) { }
  /*
  getJokes(): Promise<Joke[]> {
    console.log('JokeService.getJokes()')
    return Promise.resolve(JOKES);
  }

  getJoke(id: number): Promise<Joke> 
  {
    return Promise.resolve(JOKES[id])
  }
 
*/
  getJokes(): Promise<Joke[]> {
      console.log("in getJokes");
    return this.http.get(this.jokesUrl)
               .toPromise()
               .then(response => response.json().data as Joke[])
               .catch(this.handleError);
  }
 
  getJoke(id: number): Promise<Joke> {
      console.log("in getJoke");
    const url = `${this.jokesUrl}/${id}`;
    console.log(url);
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Joke)
      .catch(this.handleError);
  }

 
  delete(id: number): Promise<void> {
    const url = `${this.jokesUrl}/${id}`;
    console.log(url);
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
 
  update(joke: Joke) : Promise<Joke>
  {
    console.log("In update: " + this.jokesUrl +" " + joke.id + JSON.stringify(joke));
    return this.http
      .put(`${this.jokesUrl}/${joke.id}`, JSON.stringify(joke), {headers: this.headers})
               .toPromise()
               .then(() => joke)
               .catch(this.handleError);
  }

  create() : Promise<Joke>
  {
    let name = "new";
    console.log("in create: ");
    return this.http
      .post(this.jokesUrl, JSON.stringify({name: name}), {headers: this.headers})
               .toPromise()
               .then(res => res.json().data as Joke)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}