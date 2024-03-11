const findTheOldest = function (people) {
  let oldestPerson = null;
  let maxAge = 0;

  for (let person of people) {
    let age = person.deathYear - person.birthYear;
    if (age > maxAge) {
      maxAge = age;
      oldestPerson = person;
    }
  }

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
