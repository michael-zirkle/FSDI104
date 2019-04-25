class Characters{
    constructor(image,name,points){
        this.image=image;
        this.name=name;
        this.points=points;
    }
    
}

class items{
    constructor(name,pointI,type){
        this.name=name;
        this.pointI=pointI;
        this.type=type;
    }
}

const item1=new items('Blade Slash',60,'damage');
const item2=new items('Fire Ball',70,'damage');
const item3=new items('Shield Block',50,'defense');
const item4=new items('Lightning',30,'defense');
const item5=new items('Counter',80,'defense');

const itemsArray=[item1,item2,item3,item4,item5];

function printCharacter(imageP,nameP,pointsP){
    document.getElementById('character').innerHTML=`<img src="${imageP}" width="100" alt="Sora"> <br> <h3> ${nameP}</h3><h3> Points = ${pointsP}</h3>`;
}
let startPoints=100;
const Sora=new Characters('img/Sora.ppg','Sora',startPoints);
const Donald=new Characters('img/Donald.png','Donald',100);
const Goofy=new Characters('img/Goofy.png','Goofy',100);
let selection;


    selection=prompt("Select a character:");




switch (selection) {
    case 'Sora':        
        printCharacter('img/Sora.png','Sora',100);
        break;
    case 'Donald':        
        printCharacter('img/Donal.png','Donald',100);
        break;
    case 'Goofy':        
        printCharacter('img/Goofy.png','Goofy',100);
        break;
    default:
        alert('Please, select a valid option');
        break;
}

for(let i=0;i<3;i++)
{
    let itemSelection=prompt("Select a number between 0-4:");

    if(itemsArray[itemSelection].type==='defense'){
            let updatePoints=Sora.points+itemsArray[itemSelection].pointI;
            Sora.points=updatePoints;
            printCharacter('img/Sora.png','Sora',updatePoints);
    }
    else{
        let updatePoints=Sora.points-itemsArray[itemSelection].pointI;
            Sora.points=updatePoints;
            printCharacter('img/Sora.png','Sora',updatePoints);

    }

}

if(Sora.points>100){
    document.getElementById('character').innerHTML=`<h2>----VICTORY----</h2> <h3> You Won!! </h3>`
}
else{
    document.getElementById('character').innerHTML=`<h2>----DEFEAT----</h2> <h3> You Lost!! </h3>`
}


//console.log();