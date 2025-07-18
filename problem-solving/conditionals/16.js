// Write a program to price per copy and total price for printed copies?
// Chart prices
// 	0 – 99: $0.30 per copy
// 	100 – 499:  $0.28 per copy
// 	500 – 799: $0.27 per copy
// 	800 – 1000: $0.26 per copy
// 	Over 1000: $0.25 per copy
copies = 1000;
if (copies >= 0 && copies <= 99) {
  console.log("Price per copy is $0.30");
  console.log("Total price is $" + copies * 0.30);
} else if (copies >= 100 && copies <= 499) {
  console.log("Price per copy is $0.28");
  console.log("Total price is $" + copies * 0.28);
} else if (copies >= 500 && copies <= 799) {
  console.log("Price per copy is $0.27");
} else if (copies >= 800 && copies <= 1000) {
  console.log("Price per copy is $0.26");
} else if (copies > 1000) {
  console.log("Price per copy is $0.25");
} else {
  console.log("Invalid input");
}