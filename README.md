# WEDE5020 LU6 Class 1 – Campus Spend Calculator Lab

**Student Name:** Israa Williams
**Student Number:** ST10501763
**Module:** WEDE5020 – Web Development (Introduction)
**Learning Unit:** LU6 Theme 1: JavaScript Basics – Data Types

## Overview
Campus Spend Calculator that reads what a student types, converts it to the right data type, does the maths and reports weekly and monthly campus spend.
Skill being tested: everything typed into an input arrives as a **string**. Calculator only works if you convert it.

**Outcomes:** 
- LO2: Understand basic JavaScript syntax
- LO3: Understand variables, data types, and arrays
- LO4 (preview): Basic validation

**Time Allocation:** 30 minutes (5 + 10 + 10 + 5)

## Features Implemented
- Part A (5min): Input form with 5 inputs + Calculate button
- Part B (10min): Reads inputs and fixes data types with `Number()`
- Part C (10min): Calculates and displays in Rands with `toFixed(2)`
- Part D (5min): Keeps history in an array
- Stretch 1: Empty field validation – "Please fill in every field"
- Stretch 2: Monthly budget check (R1500) with red warning + over budget amount
- Stretch 3: Clear button that empties array and list without reload

## File Structure
spend-lab/
├── index.html
├── js/
│   └── script.js
└── README.md


## Element IDs (Required by Brief)
- studentName – Text input: your name
- taxiFare – Number input: taxi fare per trip (R)
- tripsPerDay – Number input: trips per day
- lunchCost – Number input: lunch cost per day (R)
- campusDays – Number input: days on campus per week
- calcBtn – Button: Calculate
- result – Empty paragraph for result
- history – Empty list for past calculations
- clearBtn – Button: Clear (Stretch 3)
- count – Counter for calculations

## How to Run
1. Open `index.html` in Google Chrome
2. Press F12 to open DevTools > Console
3. Enter test values: Name: Israa, Taxi: 20, Trips: 2, Lunch: 60, Days: 5
4. Click Calculate
5. Check console for `typeof` and bug demonstration

## Calculation Logic
dailyCost = (taxiFare _ tripsPerDay) + lunchCost
weeklyCost = dailyCost _ campusDays
monthlyCost = weeklyCost _ WEEKS_PER_MONTH (4)Example: (20 _ 2 + 60) * 5 = R500/week, R2000/month
Budget: R360/week and R1440/month = under R1500 budget
Budget: R400/week and R1600/month = R100 over budget


## Key Concepts Learned
- `element.value` always returns a string, even for type="number"
- `"60" + "15" = "6015"` because + joins strings
- Fix: `Number(value)` converts string to number
- `Number("")` returns `0`, not `NaN` – so empty check `=== ""` needed
- `WEEKS_PER_MONTH` is a const because it never changes
- `history` is a const array because variable points to same array, push changes what's inside

## Author
Israa Williams – ST10501763 – IIE Rosebank International Cape Town Campus
