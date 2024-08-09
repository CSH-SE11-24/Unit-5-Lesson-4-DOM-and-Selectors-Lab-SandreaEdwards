// Task 1: Console log "Script running" and confirm your script.js is linked correctly
console.log("Script running")

// Task 2:
// Console log the title of the document.

console.log(document.title)

// (Pink only) Task 3:
// Console log the id of the document's body.
console.log(document.getElementById("grogu-page"))

// Task 4:
// Select the img tag for Baby Yoda and save it in a variable.
let babyYoda = document.getElementById("baby-yoda-image")

// Console log the variable to confirm you selected it correctly.
console.log(babyYoda)

// (Yellow skip) Console log the alt of the variable to see the image's alternative caption.
console.log(babyYoda.alt)

// Task 5:
// Select the p tag with the fun fact and save it in a variable.
let pTag = document.querySelector(".fun-fact")

// Console log the variable to confirm you selected it correctly.
console.log(pTag)


// (Yellow skip) Console log the textContent of the p tag to see the fun fact text
console.log(pTag.innerHTML)

// Task 6:
// Add an ID to the p tag with the quote in HTML (in the div with the class quote-container).
// Select the quote and save it in a variable.
let quote = document.getElementById("cuteKid")

// Console log the variable to confirm you selected it correctly.
console.log(quote)

// (Yellow skip) Task 7: 
// Add the class "information" to the two p tags before the quote in HTML (in the container div)
// Select the first of those p tags (selecting by class will always return the first match)
let info1 = document.querySelector(".information")

// Console log the variable to confirm you selected it correctly.
console.log(info1)

// (Pink only, extra credit for others) Look up how to select multiple elements at once and select ALL p tags with the class
let info2 = document.querySelectorAll("p.information")

// (Pink only, extra credit for others) Console log the variable to confirm you selected it correctly 
info2.forEach(function(info2) {
console.log(info2.textContent);
})




// (Extra Credit for all) Use a for loop to console log the text content of each of the selected p tags with the class
