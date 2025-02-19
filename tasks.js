// Declare an array
const fruits = ["Mango", "Banana", "Guava", "Jackfruit", "Watermelon"];

const favFruit = fruits[3];
// console.log(favFruit);

fruits[2] = "Jambura";
// console.log(fruits);

// Add or remove elements
const touristSpots = ["Bandarbon", "Sajek", "Cox Bazar"];
touristSpots.push("Sundarban");
console.log(touristSpots);
touristSpots.push("Sugondha Beach", "Shatgombuj Mosquo");
console.log(touristSpots);
touristSpots.pop();
console.log(touristSpots);

// Checking Array Membership with 'includes'
const books = [
	"bangla",
	"english",
	"math",
	"scince",
	"general knowledge",
	"ICT",
];

if (books.includes("javascript")) {
	console.log("learn it and build your IT career");
} else {
	console.log("you must purchase a javascript course");
}
