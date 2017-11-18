import { Joke } from './joke';

export const JOKES: Joke[] =
[ 
        {id:0, name: 'Wife Please', dirtiness: 3, style: 'one-liner', origin: 'Rodney Dangerfield', addedBy: 'RDL',  addedDate: new Date('7/9/2017'),
        lines : [ {id: 1, jokeId:0, lineSequence:1, isPunchline:true, line:'Take my wife.... Please!'}] },

        {id:1, name: 'Sky So High',dirtiness: 0, style: 'Q&A', origin: 'Childs Joke Book - unknown',  addedBy: 'RDL',  addedDate: new Date('7/9/2017'),
        lines : [ {id: 2, jokeId:2, lineSequence:1, isPunchline:false, line:'Why is the Sky so High?'},
                  {id: 3, jokeId:2, lineSequence:2, isPunchline:true, line:'So the birds don\'t bump there heads!'}] },
        {id:2, name: 'High Cost of Kittens',dirtiness: 0, style: 'Exchange', origin: 'Childs Joke Book - unknown',  addedBy: 'RDL',  addedDate: new Date('7/9/2017'),
        lines : [ {id: 4, jokeId:3, lineSequence:1, isPunchline:false, line:'How much for the kittens.', speaker:'Little Girl'},
                  {id: 5, jokeId:3, lineSequence:2, isPunchline:false, line:'25 Cents a piece.', speaker:'Shop Keep'},
                  {id: 6, jokeId:3, lineSequence:3, isPunchline:true, line:'But I want to buy a whole one!', speaker:'Little Girl'}] },
        {id:3, name: 'Dead Frog',dirtiness: 10, style: 'Story', origin: 'unknown',  addedBy: 'RDL',  addedDate: new Date('11/4/2017'),
        lines : [ {id: 7, jokeId:4, lineSequence:1, isPunchline:false, line:'A little boy walks into a whore house with a dead frog in a box and asked for a whore with the clap.'},
                  {id: 8, jokeId:4, lineSequence:2, isPunchline:false, line:'All of our whores are clean, we don\'t have any whores with the clap.', speaker:'Madame'},
                  {id: 9, jokeId:4, lineSequence:3, isPunchline:false, line:'Every whore house has at least one whore with the clap, and I\'ll pay extra', speaker:'Little boy'},
                  {id: 10, jokeId:4, lineSequence:4, isPunchline:false, line:'So the Madam sends the little boy up to a room and after he comes down she stops him with a question.'}, 
                  {id: 11, jokeId:4, lineSequence:5, isPunchline:false, line:'Now will you tell me why you wanted a whore with the clap?', speaker:'Madame'},
                  {id: 12, jokeId:4, lineSequence:6, isPunchline:true, line:'Well, I\'m going to go home and fuck my sister, and then she is going to fuck my father, and he is going to fuck my mother, who will fuck the postman.  And that is the Mother Fucker who ran over my frog.', speaker:'Little boy'},
            ] },          
      ]