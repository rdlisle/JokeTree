import {JokeLine} from './joke-line';

export class Joke {
    id?: number;
    name?: string;
    dirtiness?: number; // could go to cross reference later.  0=clean for little kids, 10=gross
    style?: string; // Style table?  Style table can then define types of lines
    origin?: string; //Cross reference to source table
    addedBy?: string; // future table
    addedDate?: Date;
    udatedDate?: Date;
    lines?: JokeLine[];

    constructor (id:number,  name:string, lines : JokeLine[]){
            this.id=id;
            this.name=name;
            this.lines=lines;
        }
}