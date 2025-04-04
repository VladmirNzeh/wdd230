const directory = document.getElementById("member-directory");
const gridBtn = document.getElementById("grid-view");
const listBtn = document.getElementById("list-view");

const dataURL = "data/members.json";

async function getMembers() {
  const response = await fetch(dataURL);
  const data = await response.json();
  displayMembers(data.members);
}

function displayMembers(members) {
  directory.innerHTML = ""; // Clear any existing content

  members.forEach(member => {
    const card = document.createElement("section");
    card.classList.add("member");

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo" loading="lazy" />
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
      <p class="level">${member.membership} Member</p>
    `;

    directory.appendChild(card);
  });
}

// Toggle views
gridBtn.addEventListener("click", () => {
  directory.classList.add("grid");
  directory.classList.remove("list");
  gridBtn.classList.add("active");
  listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
  directory.classList.add("list");
  directory.classList.remove("grid");
  listBtn.classList.add("active");
  gridBtn.classList.remove("active");
});

getMembers();
