/* console.log("ovo radi");
//zadatak 1
for (let i = 1; i < 11; i++){
    console.log(i);
} */

//zadatak 2

/* let n = prompt("Unesi broj?");
alert( n );
let zbroj = 0;
for(let i = 1; i < n; i++){
    zbroj += i;    
}
console.log(zbroj); */

//zadatak 3
/* let ocjene = [4,5,3,4,2];
let zbroj = 0;
let prosjek = 0;
for(let i = 0; i < ocjene.length; i++){
   zbroj += ocjene[i];
}
prosjek = zbroj / 5;
console.log(prosjek);
 */


//zadatak 4
let n = prompt("Unesi broj?");
/* for(let i = 1; i < n; i++){
    if(i%2===0)   {
        console.log(n + " paran");
    }
        if(i!=2===0)   {
        console.log(n + " neparan");
    }
} */
let i = 0;
while(i < n){
    if(i%2===0)   {
        console.log(n + " paran");
    }
        if(i!=2===0)   {
        console.log(n + " neparan");
    }
}
