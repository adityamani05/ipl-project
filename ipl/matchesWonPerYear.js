function matchesWonPerYear(matches)
{
    const result = {};
    for(let match of matches)
    {
        const season = match.season;
        const winnerteam = match.winner;
        const teamOne = match.team1;
        const teamTwo = match.team2;
        const loserteam = (winnerteam == teamOne)?teamTwo:teamOne;
        if(winnerteam == "")
        {
            continue; // pass for next iteration if result is ""
        }
        if(result[season]) //if season is present
        {
            if(result[season][winnerteam])
            {
                result[season][winnerteam] += 1;
            }
            else
            {
                result[season][winnerteam] = 1;
            }
            if(!(result[season][loserteam]))
            {
                result[season][loserteam] = 0;
            }
        }
        else
        {
            result[season] = {};
            result[season][winnerteam] = 1;
            result[season][loserteam] = 0;
        }
    }
    //console.log(result);
    return result;
}
module.exports = matchesWonPerYear;