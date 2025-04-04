const baseURL = "https://vladmirnzeh.github.io/wdd230/";
const linksURL = `${baseURL}data/links.json`;

async function getLinks() {
    try {
      const response = await fetch(linksURL);
      if (!response.ok) throw new Error("Failed to fetch links data");
      
      const data = await response.json();
      displayLinks(data.weeks); // Call the function to display links
    } catch (error) {
      console.error("Error fetching links:", error);
    }
  }
  
  getLinks();

  function displayLinks(weeks) {
    const activitiesSection = document.querySelector(".learning-activities ul"); 
    activitiesSection.innerHTML = ""; // Clear existing static content
  
    weeks.forEach((week) => {
      let listItem = document.createElement("li");
      listItem.innerHTML = `${week.week}: `;
  
      week.links.forEach((link, index) => {
        let anchor = document.createElement("a");
        anchor.href = link.url;
        anchor.textContent = link.title;
        anchor.target = "_blank";
  
        listItem.appendChild(anchor);
        if (index < week.links.length - 1) {
            listItem.appendChild(document.createTextNode(" | "));
        }
      });
  
      activitiesSection.appendChild(listItem);
    });
  }
  