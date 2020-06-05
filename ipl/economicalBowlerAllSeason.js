function economicalBowlerAllSeason(deliveries,matches){
    var result = {};
    let economicalBowler2008 = economicalBowlerPerYear(deliveries,matches,2008);
    let economicalBowler2009 = economicalBowlerPerYear(deliveries,matches,2009);
    let economicalBowler2010 = economicalBowlerPerYear(deliveries,matches,2010);
    let economicalBowler2011 = economicalBowlerPerYear(deliveries,matches,2011);
    let economicalBowler2012 = economicalBowlerPerYear(deliveries,matches,2012);
    let economicalBowler2013 = economicalBowlerPerYear(deliveries,matches,2013);
    let economicalBowler2014 = economicalBowlerPerYear(deliveries,matches,2014);
    let economicalBowler2015 = economicalBowlerPerYear(deliveries,matches,2015);
    let economicalBowler2016 = economicalBowlerPerYear(deliveries,matches,2016);
    let economicalBowler2017 = economicalBowlerPerYear(deliveries,matches,2017);
    let economicalBowler2018 = economicalBowlerPerYear(deliveries,matches,2018);
    let economicalBowler2019 = economicalBowlerPerYear(deliveries,matches,2019);
    result["2008"] = economicalBowler2008;
    result["2009"] = economicalBowler2009;
    result["2010"] = economicalBowler2010;
    result["2011"] = economicalBowler2011;
    result["2012"] = economicalBowler2012;
    result["2013"] = economicalBowler2013;
    result["2014"] = economicalBowler2014;
    result["2015"] = economicalBowler2015;
    result["2016"] = economicalBowler2016;
    result["2017"] = economicalBowler2017;
    result["2018"] = economicalBowler2018;
    result["2019"] = economicalBowler2019;
    //console.log(result);
    return result;
}
function economicalBowlerPerYear(deliveries,matches,year)
{
    var myMap=new Map();
    var myMap1=new Map();
    var arr=[];
    for(let i=0;i<matches.length;i++)
    {
      if(matches[i].season==year)
      {
        for(let j=0;j<deliveries.length;j++)
        {
           if(deliveries[j].match_id==matches[i].id)
           {   
                if(myMap1.has(deliveries[j].bowler))
                {
                if(deliveries[j].is_super_over!=0)
                {
                    let ans=myMap1.get(deliveries[j].bowler);
                    ans=ans+6;
                    myMap1.set(deliveries[j].bowler,ans);
                }
                if(deliveries[j].ball<"7")
                {
                    let ans=myMap1.get(deliveries[j].bowler);
                    ans=ans+1;
                    myMap1.set(deliveries[j].bowler,ans);
                }
                }
                else
                {
                   if(deliveries[j].ball<"7")
                   {
                    myMap1.set(deliveries[j].bowler,1);
                   }
                }
           }  
       }
    }
    }
    for(let i=0;i<matches.length;i++)
    {
      if(matches[i].season==year)
      {
        for(let j=0;j<deliveries.length;j++)
        {
           if(deliveries[j].match_id==matches[i].id)
           {   
                if(!arr.includes(deliveries[j].bowler))
                {
                  arr.push(deliveries[j].bowler);
                }
           }  
       }
    }
    }
for(let i=0;i<matches.length;i++)
{
  if(matches[i].season==year)
  {
    for(let j=0;j<deliveries.length;j++)
    {
       if(deliveries[j].match_id==matches[i].id)
       {
            if(myMap.has(deliveries[j].bowler))
            {
                let ans=myMap.get(deliveries[j].bowler);
                ans=ans+parseInt(deliveries[j].total_runs)-(parseInt(deliveries[j].legbye_runs)+parseInt(deliveries[j].bye_runs)+parseInt(deliveries[j].penalty_runs));
                // ans=ans/*+parseInt(deliveries[j].wide_runs)+parseInt(deliveries[j].noball_runs)*/+parseInt(deliveries[j].batsman_runs)+parseInt(deliveries[j].extra_runs);
                myMap.set(deliveries[j].bowler,ans);
            }
            else
            {
                myMap.set(deliveries[j].bowler,parseInt(deliveries[j].total_runs)-(parseInt(deliveries[j].legbye_runs)+parseInt(deliveries[j].bye_runs)+parseInt(deliveries[j].penalty_runs)));
                // myMap.set(deliveries[j].bowler,/*parseInt(deliveries[j].wide_runs)+parseInt(deliveries[j].noball_runs)+*/parseInt(deliveries[j].batsman_runs)+parseInt(deliveries[j].extra_runs));
            }
       }  
   }
}
}
let nam="abc";
let min=99999999999;
let result={};
var count=10;
var compp=0;
var sample=[];
while(count>0)
{
for(let i=0;i<arr.length;i++)
{
    if(myMap1.has(arr[i])&&myMap.has(arr[i]))
    {
        let c1= myMap1.get(arr[i]);
        let c2=myMap.get(arr[i]);
        c2=c2*6;
        c2=c2/c1;
        if(min>c2 && compp<c2)
        {
            min=c2;
            nam=arr[i];
        }
    }
}
sample.push(nam);
result[nam]=min;
compp=min;
min=9999999;
count--;
}
var arr1=[];
    for(var i=0;i<sample.length;i++)
    {
        let result1={}
        result1["bowler"]=sample[i];
        let c1= myMap1.get(sample[i]);
        let c2=myMap.get(sample[i]);
        c2=c2*6;
        c2=c2/c1;
        result1["economy"]=c2;
        arr1.push(result1);
    }
//console.log(arr1);
return arr1;

}
module.exports = economicalBowlerAllSeason;