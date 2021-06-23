var temparature = [
    { district: "tvm", temp: 25 },
    { district: "kollam", temp: 27 },
    { district: "kottayam", temp: 24 },
    { district: "ekm", temp: 27 },
    { district: "tsr", temp: 25 },
    { district: "pkd", temp: 30 },
    { district: "tvm", temp: 36},
    { district: "kollam", temp: 25 },
    { district: "kottayam", temp: 28 },
    { district: "ekm", temp: 29 },
    { district: "tsr", temp: 30 },
    { district: "pkd", temp: 18 },

]
var weather = {};

for (let data of temparature) {
    let temp = data["temp"];
    let district = data["district"];
    if (district in weather) {
        let old_temp = weather[district]
        {
            if (old_temp < temp) {
                weather[district] = temp;
            }
            else {
                weather[district] = old_temp;
            }

        }
    }
    else {
        weather[district] = temp;
    }
}
console.log(weather);
// for(let value in weather)
// {
//     console.log(weather[value]);
//     // if(weather[value]<)
//     // console.log("asd");
//     weather.sort((i,j)=>i - j)
//     // arr.sort((num1,num2)=>num1 - num2)
// }




// weather.sort((a,b) => (a. > b.last_nom) ? 1 : ((b.last_nom > a.last_nom) ? -1 : 0))




var sorted=[];
tem=0;
for(let value in weather)
{

if(weather[value]>tem)
{
sorted.push(value,weather[value])
tem=weather[value];
}
}
// console.log(sorted);
// sorted.sort((num1,num2)=>num1 - num2)
console.log("heighest temp is:-   "+sorted);



function sortByTemp(data)
{
    return Object.entries(data).sort((dist1,dist2)=>dist2[1]-dist1[1])
}
console.log(sortByTemp(weather));