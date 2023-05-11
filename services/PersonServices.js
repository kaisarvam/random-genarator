const { faker } = require("@faker-js/faker");
const createPersonFromData = (data) => {
  const person = {};
  data.includes("firstname")
    ? (person.firstName = faker.name.firstName())
    : null;
  data.includes("lastname") ? (person.lastName = faker.name.lastName()) : null;
  data.includes("age")
    ? (person.age = Math.floor(Math.random() * 37 + 18))
    : null;
  data.includes("email")
    ? (person.email =
        person.firstName && person.lastName
          ? `${person.firstName}.${person.lastName}@gmail.com`
          : faker.internet.email())
    : null;
  data.includes("phone") ? (person.phone = faker.phone.number()) : null;

  return person;
};

module.exports = { createPersonFromData };
