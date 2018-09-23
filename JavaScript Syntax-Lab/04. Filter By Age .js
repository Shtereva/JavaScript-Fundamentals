function filterByAge(minAge, nameFirst, ageFirst, nameSecond, ageSecond){
    let firstPerson = {name: nameFirst, age: ageFirst};
    let secondPerson = {name: nameSecond, age: ageSecond};

    if (firstPerson.age >= minAge) {
        console.log(firstPerson);
    }
    if (secondPerson.age >= minAge) {
        console.log(secondPerson);
    }
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);