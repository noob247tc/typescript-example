// let name: string = "Justine";
// let age: number = 25;

// //age = 30; 
// age = "twenty";
// let isLearning: boolean = true;

// console.log("Name:", name);
// console.log("Age:", age);
// console.log("Currently learning:", isLearning);

// let productName: string = "Laptop";
// let price: number =45000;
// let isAvailable: boolean = true;

// console.log("Product: ", productName);
// console.log("Price: ", price);
// console.log("Is it Available: ", isAvailable);


/////////////////////LESSON 3 - Functions, Parameters, and Return Types/////////////////////////////////


// function greet(name: string): void {
//     console.log("Hello, " + name + "!");
// }

// greet("Justine");
// greet("Alex");


// function calculateDiscount(
//     price: number,
//     discountPercent: number
// ): number {
//     const discount = price * (discountPercent / 100);
//     return price - discount;
// }

// const finalPrice = calculateDiscount(1000, 20);

// console.log("Original price:", 1000);
// console.log("Discount:", "20%");
// console.log("Final price:", finalPrice);


// let scores: number[] = [85, 90, 95];

// console.log("All scores:", scores);
// console.log("First score:", scores[0]);
// console.log("Second score:", scores[1]);
// console.log("Third score:", scores[2]);



// let students: string[] = ["Justine", "Alex", "Maria"];

// students.push("John");

// console.log("Students:", students);
// console.log("First student:", students[0]);
// console.log("Number of students:", students.length);


// let students: { name: string; age: number }[] = [
//     { name: "Justine", age: 25 },
//     { name: "Alex", age: 22 },
//     { name: "Maria", age: 24 }
// ];

// students.forEach((student) => {
//     console.log(student.name, "-", student.age);
// });

let prices: number[] = [100, 250, 500];

prices.push(750);

console.log(prices);

prices.forEach((price)=>{
    console.log(price);
})