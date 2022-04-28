const bodyParser = require("body-parser");

const setUp = (app) => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
};

module.exports = {
  middelwareSetUp: setUp,
};
