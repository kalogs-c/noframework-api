class Hero {
  constructor({ name, age, power }) {
    this.id = Math.floor(Math.random() * 100) + Date.now();
    this.name = name;
    this.age = age;
    this.power = power;
  }

  isValid() {
    const propertiesNames = Object.getOwnPropertyNames(this);
    const amountInvalidItems = propertiesNames
      .map((property) =>
        !!this[property] ? null : `Property "${property}" is missing`
      )
      .filter((item) => !!item);

    return {
      valid: amountInvalidItems.length === 0,
      error: amountInvalidItems,
    };
  }
}

module.exports = Hero;

const hero = new Hero({
  name: "Chaves",
  age: 46,
  power: "Isso isso isso",
});

console.log("isValid: ", hero.isValid());
console.log("Hero: ", hero);
