// import { Team } from './team.js';

interface Team {
    name: string;
    score: number;
    wickets: number;
    balls: number;
}

class Match{
    
    team1: Team
    team2: Team

    innings: number = 1;
    maxballs = 20

    constructor(team1: Team, team2: Team){
        this.team1 = team1;
        this.team2 = team2;
    }

    getCurrentScore(){
        console.log(`${team1.score} - ${team1.wickets}`);
    }
    getBattingSummary(){

    }
    getBowlingSummary(){

    }
    getMatchOverview(){

    }
    getRandomScore(){

    }
    getScore(){

    }
}

let team1 = {
    name: 'India',
    score: 0,
    wickets: 0,
    balls: 0,
}

let team2 = {
    name: 'South Africa',
    score: 0,
    wickets: 0,
    balls: 0,
}

var match = new Match(team1, team2);


