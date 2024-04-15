// Question 46

interface laptop {
   make:string;
   model : string;
   year : number;
   describe():void
} 

let Dell:laptop = {
   make :"Lenova",
   model : "DESKTOP-IQ9G71O",
   year : 2022,
   describe() {
       console.log(`My laptop name is ${this.make}, model is ${this.model} and i buy in this year ${this.year}`);
   },
}

Dell.describe();

// Question 47

let laptops:laptop[] = [
   {
   make :"Lenova",
   model : "DESKTOP-IQ9G71O",
   year : 2022,
   describe() {
       console.log(`My laptop name is ${this.make}, model is ${this.model} and i buy in this year ${this.year}`);
   },
},
   {
   make :"Lenova",
   model : "DESKTOP-IQ9G71O",
   year : 2022,
   describe() {
       console.log(`My laptop name is ${this.make}, model is ${this.model} and i buy in this year ${this.year}`);
   },
}
];

let [laptop1,laptop2] = laptops;
console.log(laptop1)
console.log(laptop2)

// Question 48
let price1:number[] = [19000,29000,5000];
let price2:number[] = [78000,67000,99900];
let combinedprice:number[] = [...price1,...price2];
combinedprice.sort((a,b)=>{return a-b});
console.log(combinedprice);