const url = "https://api.github.com/users";
const btn = document.getElementById("btn");
const factsContainer = document.getElementById("facts");

btn.addEventListener("click", display);

async function display() {
  let response = await fetch(url);
  let data = await response.json();

  // Clear previous facts
  factsContainer.innerHTML = "";

  // Loop through the data and display each fact
  data.forEach((element) => {
    let factItem = document.createElement("p");
    factItem.textContent = `Login :${element.login} User Details: ${element.avatar_url}`; // Assuming 'text' contains the fact
    factsContainer.appendChild(factItem);
  });
}
