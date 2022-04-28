// === imports == //
const express = require("express");
const { middelwareSetUp } = require("./middelware");
const { taskRoutes } = require("./task/task-routes");

// === initialisation == //
const app = express();
const routes = express();
middelwareSetUp(app);

// === endpoints == //
routes.use("/task", taskRoutes);
app.use("/v1", routes);

// === run app == //
app.listen(8000, () => console.log(`Example app running!`));
