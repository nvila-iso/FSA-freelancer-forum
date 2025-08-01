/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

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

function makeFreelancers() {
  const freelancers = [];

  for (let i = 0; i < NUM_FREELANCERS; i++) {
    freelancers.push(makeFreelancer());
  }

  return freelancers;
}

const freelancers = makeFreelancers();
// console.log(freelancers);

// 3.  Write a function that returns the average rate of all freelancers in state.
function getAverageRate(state) {
  let sum = 0;

  for (let i = 0; i < NUM_FREELANCERS; i++) {
    sum += state[i].rate;
  }

  let average = sum / state.length;
  return average;
}

// 4. Use that function to initialize a state variable which will store the average rate of all freelancers.
const averagerate = getAverageRate(freelancers);
// console.log(averageRate);

// 5. Write a component function to represent a single freelancer.
function singleFreelancer(freelancer) {
  // create row
  //create td + add freelancer name
  // repeat for occupation + rate
  const row = document.createElement("tr");

  const name = document.createElement("td");
  name.textContent = freelancer.name;

  const occ = document.createElement("td");
  occ.textContent = freelancer.occupation;

  const rate = document.createElement("td");
  rate.textContent = "$" + freelancer.rate;

  row.append(name);
  row.append(occ);
  row.append(rate);
  return row;
}

// 6. Write a component function to represent an array of freelancers.
function createTable(freelancers) {
  const tableHeaders = ["NAME", "OCCUPATION", "RATE"];
  const table = document.createElement("table");

  // TABLE HEAD
  const tableHead = document.createElement("thead");
  table.append(tableHead);

  const tableRow = document.createElement("tr");
  tableHead.append(tableRow);

  for (let header of tableHeaders) {
    const tableHeader = document.createElement("th");
    tableHeader.textContent = header;
    tableRow.append(tableHeader);
  }

  // TABLE BODY
  const tableBody = document.createElement("tbody");

  //iterate through freelancers
  //    add the row from a singlefree lancer
  //    add the row to the body
  // make sure the body is appended to the table
  for (let freelancer of freelancers) {
    let newRow = singleFreelancer(freelancer);
    tableBody.append(newRow);
  }
  table.append(tableBody);

  return table;
}

function populatePage() {
  const main = document.getElementById("app");
  // header
  const header = document.createElement("h1");
  header.textContent = "Freelancer Forum";
  main.append(header);

  // average rate
  const averageRate = document.createElement("p");
  averageRate.textContent = "The average rate is $" + averagerate;
  main.append(averageRate);

  // table
  const tableDiv = document.createElement("div");
  tableDiv.classList.add("table-space");
  main.append(tableDiv);
  const table = createTable(freelancers);
  tableDiv.append(table);
}

populatePage();
