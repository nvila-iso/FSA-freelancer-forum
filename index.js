/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// 4. Use that function to initialize a state variable which will store the average rate of all freelancers.
// 5. Write a component function to represent a single freelancer.
// 6. Write a component function to represent an array of freelancers.
// 7. Write a component function to represent the average rate of all freelancers.
// 8. Write and call a render function that will mount the application onto the document.

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// 1.  Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants.
function makeFreelancer() {
  const randomNames = Math.floor(Math.random() * NAMES.length);

  const randomOccupations = Math.floor(Math.random() * OCCUPATIONS.length);

  const randomPrices =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min) + 1) +
    PRICE_RANGE.min;

  const freelancer = {
    name: NAMES[randomNames],
    occupation: OCCUPATIONS[randomOccupations],
    rate: randomPrices,
  };

  return freelancer;
}

// 2. Initialize a state variable to an array of NUM_FREELANCERS freelancer objects.
const freelancers = [];

for (let i = 0; i < NUM_FREELANCERS; i++) {
  freelancers.push(makeFreelancer());
}

// 3.  Write a function that returns the average rate of all freelancers in state.
function getAverageRate() {
  let sum = 0;

  for (let i = 0; i < NUM_FREELANCERS; i++) {
    sum += freelancers[i].rate;
  }

  let averageRate = sum / NUM_FREELANCERS;
  return averageRate;
}

function populatePage() {
  const main = document.getElementById("app");
  // header
  const header = document.createElement("h1");
  header.textContent = "Freelancer Forum";
  main.append(header);

  // average rate
  const averageRate = document.createElement("p");
  averageRate.textContent = "The average rate is $" + getAverageRate();
  main.append(averageRate);

  const tableDiv = document.createElement("div");
  tableDiv.classList.add("freelance-table");
  main.append(tableDiv);
}

populatePage();
