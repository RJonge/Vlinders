"use strict";

class Butterfly {

  constructor (id,name,weight) {
    this.id=id;
    this.name=name;
    this.weight=weight;
  }
}

let butterfly= new Butterfly (1,"Weerschijnvlinder", 0.3);
let butterfly2= new Butterfly (2,"Atalanta",0.5);
let butterfly3 = new Butterfly(3, "Dagpauwoog", 0.45);
let ButterflyCollection= [];
ButterflyCollection.push (butterfly, butterfly2, butterfly3);

let totalWeight= 0;
for (let butterfly of ButterflyCollection) {
  console.log ("Id-nummer vlinder = "+butterfly.id); console.log ("Naam vlinder"+" = "+butterfly.name);
  console.log ("Gewicht vlinder (in gram) = "+butterfly.weight);
  totalWeight += butterfly.weight;
}


console.log ("Het totaalgewicht is = " + totalWeight);
