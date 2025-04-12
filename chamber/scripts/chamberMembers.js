// chamberMembers.js

// Select the container element where chamber member data will be injected.
const chamberMembersContainer = document.getElementById('chamber-members');

// URL to the JSON data file (using your existing members.json file)
const membersURL = 'data/members.json';

// Asynchronously fetch the chamber members data from the JSON file.
async function fetchChamberMembers() {
  try {
    const response = await fetch(membersURL);
    if (!response.ok) {
      throw Error(await response.text());
    }
    const membersData = await response.json();
    displayChamberMembers(membersData.members);
  } catch (error) {
    console.error("Error fetching chamber members data:", error);
  }
}

// Function to create and display member cards in the container.
function displayChamberMembers(members) {
  members.forEach(member => {
    // Create a wrapper for each member.
    const memberCard = document.createElement('div');
    memberCard.classList.add('member-card');

    // If the member has an image, create an image element and add it to the card.
    if (member.image) {
      const img = document.createElement('img');
      img.setAttribute('src', member.image);
      img.setAttribute('alt', member.name);
      memberCard.appendChild(img);
    }

    // Create and append the member's name.
    const nameEl = document.createElement('h3');
    nameEl.textContent = member.name;
    memberCard.appendChild(nameEl);

    // Create and append the member's title, if available.
    if (member.title) {
      const titleEl = document.createElement('p');
      titleEl.classList.add('member-title');
      titleEl.textContent = member.title;
      memberCard.appendChild(titleEl);
    }

    // Create and append the member's description, if available.
    if (member.description) {
      const descEl = document.createElement('p');
      descEl.classList.add('member-description');
      descEl.textContent = member.description;
      memberCard.appendChild(descEl);
    }

    // If the member has a website, create a link element.
    if (member.website) {
      const linkEl = document.createElement('a');
      linkEl.setAttribute('href', member.website);
      linkEl.textContent = 'Visit Website';
      memberCard.appendChild(linkEl);
    }

    // Append the member card to the main container.
    chamberMembersContainer.appendChild(memberCard);
  });
}

// Execute the fetch function when the script loads.
fetchChamberMembers();
