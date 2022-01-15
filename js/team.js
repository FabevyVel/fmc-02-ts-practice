export class Team {
    constructor(teamName, teamCode) {
        this.teamName = teamName;
        this.teamCode = teamCode;
    }
    getTeamName() {
        console.log(this.teamName);
    }
    updateTeamName(value) {
        this.teamName = value;
    }
}
//# sourceMappingURL=team.js.map