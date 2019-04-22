let snacks = [`salt and vinegar chips` , `pistachios` , `Pepsi` , `Coke` , `Dr.Pepper`]

let tax=[.07];
let price =[0.99,4.99,1.50,1.50,1.50];
let taxes;
let selection=prompt("Select a product: ");
let quant=prompt("Number of products: ","0");
let quant1=parseInt(quant); 
let count;
let totalbt;
let totalat;
let str = '<ul>'


snacks.forEach(function(snack) {
  str += '<li>'+ snack + '</li>';
}); 

str += '</ul>';
document.getElementById("snackContainer").innerHTML = str;



switch(selection){
    case `1`:
        count=0;
        total=pay();
        alert(`You selected a : `+snacks[0] + `--> $`+price[0] + `\n Total: $`+ total.toFixed(2));
        break;
    case `2`:
        count=1;
        total=pay();
        alert(`You selected a : `+snacks[1] + `--> $`+price[1] + `\n Total: $`+ total.toFixed(2));
        
        break;
    case `3`:
        count=2;
        total=pay();
        alert(`You selected a : `+snacks[2] + `-->$`+price[2] + `\n Total: $`+ total.toFixed(2));
        
        break;
    case `4`:
        count=3;
        total=pay();
        alert(`You selected a : `+snacks[3] + `-->$`+price[3] + `\n Total: $`+ total.toFixed(2));
        
        break;
    case `5`:
        count=4;
        total=pay();
        alert(`You selected a : `+snacks[4] + `-->$`+price[4] + `\n Total: $`+ total.toFixed(2));
        
        break;
    default:
        alert(`Please, select a valid option`);4
        break;
}




function pay(){
    
    
    totalbt=(price[count]*quant1);
    taxes=(totalbt*tax);
    totalat=(taxes+totalbt);
    return totalat

}
