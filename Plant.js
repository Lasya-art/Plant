
const area=3.1415 * 5 * 5;
const Areabysingleplant=0.8
const totalplantswithtotalarea=area / Areabysingleplant
console.log(`Total no of plants can be grown with the area of ${area} 'is' ${totalplantswithtotalarea}`)
console.log(`total area of the plant :${area}`)
const InitialNoofPlants=20

const plantctat1week=InitialNoofPlants * 2
console.log(`Plantcountat1week:${plantctat1week}`)
const totalareabyplantat1week=plantctat1week * Areabysingleplant
console.log(`Totalareabyplantat1week:${totalareabyplantat1week}`)
const prunlimit=0.8 * area
console.log(`Prunlimit:${prunlimit}`)
const monitor=0.5 * area
console.log(`Monitored:${monitor}`)
if(totalareabyplantat1week >= prunlimit)
{
    console.log(`Plant count exceeds the 80% of the garden  `)
}
else if(totalareabyplantat1week <= monitor && totalareabyplantat1week >= prunlimit)
{
    console.log('Plant count is between the 50% and 80% of the garden')
}
else 
{
    console.log(`As the totalspace for  20 plants to grow is  less than 50% of the maximum capacity of the garden,there is room to grow plant`)
}


const plantctat2week=InitialNoofPlants * (2 + 2)
console.log(`Plantcountat2week:${plantctat2week}`)
const totalareabyplantat2week=plantctat2week * Areabysingleplant
console.log(`Totalareabyplantat2week:${totalareabyplantat2week}`)
if(totalareabyplantat2week >= prunlimit)
    {
        console.log(`Plant count exceeds the 80% of the garden  `)
    }
    else if(totalareabyplantat2week <= monitor && totalareabyplantat2week >= prunlimit)
    {
        console.log('Plant count is between the 50% and 80% of the garden')
    }
    else 
    {
        console.log(`As the totalspace for  20 plants to grow is  less than 50% of the maximum capacity of the garden,there is room to grow plant`)
    }

    
    const plantctat3week=InitialNoofPlants * (2 +2+2)
console.log(`Plantcountat3week:${plantctat3week}`)
const totalareabyplantat3week=plantctat3week * Areabysingleplant
console.log(`Totalareabyplantat3week:${totalareabyplantat3week}`)
if(totalareabyplantat3week >= prunlimit)
    {
        console.log(`Plant count exceeds the 80% of the garden  `)
    }
    else if(totalareabyplantat2week <= monitor && totalareabyplantat2week >= prunlimit)
    {
        console.log('Plant count is between the 50% and 80% of the garden')
    }
    else 
    {
        console.log(`As the totalspace for  20 plants to grow is  less than 50% of the maximum capacity of the garden,there is room to grow plant`)
    }

const plantctat10week=100 * (2**10)
console.log(`Plant count at 10 weeks for 100 plants:${plantctat10week}`)
const totalareafor100plants=plantctat10week*Areabysingleplant
console.log(`Total space required for 100 plants:${totalareafor100plants}sqmeters`)
const raduisfor100plants=totalareafor100plants/3.1415
console.log(`radius for 100 Plants:${raduisfor100plants}`)
/*try{
if(totalareafor100plants<= area)
{
console.log("Space is enough")

}
else if(totalareafor100plants<= area)
{
throw "Space exceeded for the given plant coiunt"
}

}
catch(error)*/

/*try {
	if (totalareafor100plants<= area) {
		console.log("Space is sufficient")
	} else {
		throw "Error -Space exceeds for the given space."
	}
} catch (error) {
	console.log(error)
}*/
