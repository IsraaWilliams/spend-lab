const WEEKS_PER_MONTH = 4;
const MONTHLY_BUDGET = 1500;
const history = [];

document.getElementById("calcBtn").addEventListener("click", calculateSpend);

function calculateSpend() {
  const name = document.getElementById("studentName").value;
  const fareText = document.getElementById("taxiFare").value;
  const tripsText = document.getElementById("tripsPerDay").value;
  const lunchText = document.getElementById("lunchCost").value;
  const daysText = document.getElementById("campusDays").value;
  const result = document.getElementById("result");

  // Stretch 1: empty fields - Number("") returns 0, not NaN, so blank = R0
  if (name === "" || fareText === "" || tripsText === "" || lunchText === "" || daysText === "") {
    result.textContent = "Please fill in every field";
    return;
  }

  // Part B: Log types before conversion
  console.log(typeof fareText); // string
  console.log(fareText + lunchText); // "60" + "15" = "6015"

  // Fix: convert every numeric input with Number() as you read it
  const taxiFare = Number(fareText);
  const tripsPerDay = Number(tripsText);
  const lunchCost = Number(lunchText);
  const campusDays = Number(daysText);

  const dailyCost = taxiFare * tripsPerDay + lunchCost;
  const weeklyCost = dailyCost * campusDays;
  const monthlyCost = weeklyCost * WEEKS_PER_MONTH;

  result.textContent = `${name}, you spend R${weeklyCost.toFixed(2)} a week and about R${monthlyCost.toFixed(2)} a month on campus.`;

  // Stretch 2: budget warning
  if (monthlyCost > MONTHLY_BUDGET) {
    result.style.color = "red";
    result.textContent += ` That is R${(monthlyCost - MONTHLY_BUDGET).toFixed(2)} over budget.`;
  } else {
    result.style.color = "";
  }

  // Part D: history array - push changes what's inside, which array it is never changes
  history.push(`${name}: R${monthlyCost.toFixed(2)}/month`);
  const item = document.createElement("li");
  item.textContent = history[history.length - 1];
  document.getElementById("history").appendChild(item);
  document.getElementById("count").textContent = `Calculations: ${history.length}`;
}

// Stretch 3: clear history without reload
document.getElementById("clearBtn").addEventListener("click", () => {
  history.length = 0;
  document.getElementById("history").innerHTML = "";
  document.getElementById("count").textContent = "";
  document.getElementById("result").textContent = "";
});
