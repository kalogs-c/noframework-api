const HeroRepository = require("./../repositories/heroRepository");
const HeroServices = require("./../services/heroServices");

const { join } = require("path");
const fileName = join(__dirname, "./../../database/data.json");

const generateInstance = () => {
  const heroRepository = new HeroRepository({
    file: fileName,
  });
  const heroServices = new HeroServices({ heroRepository });

  return heroServices;
};

module.exports = { generateInstance };

generateInstance().find().then(console.log);
