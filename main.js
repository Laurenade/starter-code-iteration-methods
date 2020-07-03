// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// KATA 0
const greenEyes1 = users.filter(user => user.eyeColor === "green")
// OR...
const greenEyes2 = users.filter(function (user) {
    return user.eyeColor === "green"
})
printKata(0, greenEyes1)   // If you don't have this function already, see the "Set up" section above.


// DO NOT use FOR or WHILE loops. Instead, use the array iteration method specified for each individual kata.
// Challenge: 
// - On the page, print a heading for each kata below (for example: "Kata 1"). 
// - Below each heading, display your result for that kata. You can do this however you want, 
//      but we have provided the printKata() function for you above for this purpose. Our function 
//      will structure the output nicely in an HTML <details> element.


// KATA 1: Use the .filter() method
// Filter the users array to show only the users with an isActive property of true.



// KATA 2: Use the .map() method
// Map over the users array to show only the email addresses of the users.



// KATA 3: Use the .some() method
// Check whether at least one user in the users array has a company property of "OVATION".



// KATA 4: Use the .find() method
// Find the first user in the array over the age of 38.



// KATA 5: Use the .filter() and .find() methods
// Find the first user in the array over the age of 38 who is active.



// KATA 6: Use the .filter() and .map() methods
// Show the balance of every user in the array from the "ZENCO" company.



// KATA 7: Use the .filter() method with .includes() and the .map() method
// Show the age of every user with the "fugiat" tag.


