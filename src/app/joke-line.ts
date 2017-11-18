export class JokeLine {
    id:number;
    jokeId:number;
    lineSequence:number;
    isPunchline:boolean;
    line:string;
    speaker?:string;

constructor (id:number,  jokeId:number,  lineSequence:number, isPunchline:boolean,
    line:string, speaker:string){
        this.id=id;
        this.jokeId=jokeId;
        this.lineSequence=lineSequence;
        this.isPunchline=isPunchline;
        this.line=line;
        this.speaker=speaker;
    }
}