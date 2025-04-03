// Open this file in your browser to identify and reference the key/value pairs found in the JSON data. https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json.
// Declare a const variable named "url" that contains the URL string of the JSON resource provided.
// const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
// Declare a const variable name "cards" that selects the HTML div element from the document with an id value of "cards".
// const cards = document.querySelector('#cards');
// Create a async defined function named "getProphetData" to fetch data from the JSON source url using the await fetch() method.
// Store the response from the fetch() method in a const variable named "response".
// Convert the response to a JSON object using the .json method and store the results in a const variable named "data".
// Add a console.table() expression method to check the data response at this point in the console window.
// Call the function getProphetData() in the main line of your .js code to test the fetch and response.
// Example
// async function getProphetData() {
//   const response = await fetch(url);
//   const data = await response.json();
//   console.table(data.prophets); // temporary testing of data retreival
// }

// getProphetData();
// Do you remember how to check the output in the console window in DevTools? Hopefully everything checks out and you see data on the latter-day prophets neatly organized in a console table view. We will comment out this line of console line of code when we are done or just remove it.
// If it all checks out, note that the data returns a single property, an array of objects named "prophets".
// Comment out the console line and call a function named "displayProphets" and include the "data.prophets" argument. Why do we send data.prophets versus just the data variable? The displayProphets() function expects an array parameter.
// Example
// async function getProphetData(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   //console.table(data.prophets);
//   displayProphets(data.prophets); // note that we reference the prophets array of the JSON data object, not just the object
// }

// getProphetData();
// Define a function expression named "displayProphets" that handles a single parameter named "prophets" somewhere in your js file. Use an arrow expression to contain statements that will process the parameter value and build a card for each prophet.
// const displayProphets = (prophets) => {
//   // card build code goes here
// }
// Remember that functions are hoisted and therefore, where ever you define the function in your main line of code does not matter as it is available to the rest of the scoped code.
// Inside the function, use a forEach loop with the array parameter to process each "prophet" record one at a time, creating a new card each time.
// const displayProphets = (prophets) => {
//   prophets.forEach((prophet) => {

//   });
// }
// Inside the HTML card building loop, do the following:
// create a section element and store it in a variable named card using createElement(),
// create an h2 element and store it in a variable named "fullName",
// create an img element and store it in a variable named "portrait",
// populate the heading element with the prophet's full name using a template string to build the full name,
// build the image element by setting the
// src,
// alt,
// loading,
// width, and
// height attributes using setAttribute().
// Using appendChild() on the section element named "card", add the heading and image elements one at a time.
// Finally, add the section card to the "cards" div that was selected at the beginning of the script file.

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets); // Temporary test output
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let fullName = document.createElement('h2');
    let portrait = document.createElement('img');

    // Populate the heading with the prophet's full name
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;

    // Set image attributes
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append elements
    card.appendChild(fullName);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
};
