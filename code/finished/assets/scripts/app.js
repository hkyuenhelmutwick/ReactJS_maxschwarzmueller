const hobbies = ["Sports", "Cooking", "Reading"];
console.log(hobbies[0]);

hobbies.push("Working");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === "Sports");

console.log(index);

const editedHobbies = hobbies.map((item) => ({ text: item }));
console.log(editedHobbies);