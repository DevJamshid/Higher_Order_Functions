const companies = [
  { name: "Company One", category: "Finance", start: 1987, end: 2003 },
  { name: "Company Two", category: "Food", start: 1996, end: 2001 },
  { name: "Company Three", category: "Food", start: 1997, end: 2013 },
  { name: "Company Four", category: "Retail", start: 2008, end: 2010 },
  { name: "Company Five", category: "Marketing", start: 1977, end: 2020 },
  { name: "Company Six", category: "Marketing", start: 1981, end: 2000 },
  { name: "Company Seven", category: "Finance", start: 1999, end: 2005 },
  { name: "Company Eight", category: "Technology", start: 2012, end: 2014 },
  { name: "Company Nine", category: "Retail", start: 2008, end: 2017 },
];

const ages = [33, 12, 20, 15, 32, 52, 11, 9, 44, 58, 78, 53, 45, 23, 47];




// companies.forEach(function (company) {
//     console.log(company.name);
// });



// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// const retailCompany = companies.filter(company => company.category === "Retail");
// console.log(retailCompany);

// const eighties = companies.filter(
//   (company) => company.start >= 1980 && company.start < 1990
// );
// console.log(eighties);

// const lastedTenYears = companies.filter(company => (company.end - company.start > 10));
// console.log(lastedTenYears);




// const test = companies.map(company => `${company.name}[${company.start} - ${company.end}]`);
// console.log(test);


const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);

console.log(combined);