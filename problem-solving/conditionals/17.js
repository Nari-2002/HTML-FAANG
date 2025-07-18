// Write a program to check whether entered character is lowercase (a to z) or uppercase (A to Z)?
char = 'A'
if (char >= 'a' && char <= 'z') {
    console.log("Lowercase");
} else if (char >= 'A' && char <= 'Z') {
    console.log("Uppercase");
} else {
    console.log("Not a character");
}