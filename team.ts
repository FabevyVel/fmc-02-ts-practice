export class Team{

    constructor(private teamName: string, public teamCode: string){
    }

    getTeamName(){
        console.log(this.teamName);
    }

    updateTeamName(value: string){
        this.teamName = value
    }
}