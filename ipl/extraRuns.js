function extraRuns(matches,deliv)
{
    const matchId = [];
    const result = {};
    let deliveries = deliv.slice(136366,150461);
    //console.log(deliv)
   
        
        //console.log(mId);
        for(let delivery of deliveries)
        {
           
                const team =  delivery.batting_team;
                if(result[team])
                {
                    result[team] += parseInt(delivery.extra_runs);
                }
                else
                {
                    result[team] = parseInt(delivery.extra_runs);
                }
            
        }
        //console.log(result);
        return result;
    
}
module.exports = extraRuns;
