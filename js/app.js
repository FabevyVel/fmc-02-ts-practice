"use strict";
class Match {
    constructor(team1, team2) {
        this.innings = 1;
        this.maxballs = 20;
        this.team1 = team1;
        this.team2 = team2;
    }
    getCurrentScore() {
        console.log(`${team1.score} - ${team1.wickets}`);
    }
    getBattingSummary() {
    }
    getBowlingSummary() {
    }
    getMatchOverview() {
    }
    getRandomScore() {
    }
    getScore() {
    }
}
let team1 = {
    name: 'India',
    score: 0,
    wickets: 0,
    balls: 0,
};
let team2 = {
    name: 'South Africa',
    score: 0,
    wickets: 0,
    balls: 0,
};
var match = new Match(team1, team2);
//# sourceMappingURL=app.js.map