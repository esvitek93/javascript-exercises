const findTheOldest = function(array) {
    date = new Date()
    let newarr = array.reduce((acc, cur) => {
        if (cur > acc) acc = cur
    })
    console.log(newarr)
    return array 
        .map((person) => {
            if (!('yearOfDeath' in person)) person.yearOfDeath = date.getFullYear()
            person.age = (person.yearOfBirth - person.yearOfDeath)
        })
        .reduce((acc, cur) => {
            if (cur.age > acc.age) acc = cur
        })
};

    const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]

    console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
