module.exports = app => {

    // const indexRoutes = require("./index.routes");
    // app.use("/", inindexRoutesdex);

    const boardGamesRoutes = require("./boardGames.routes.js");
    app.use("/api/boardgames", boardGamesRoutes);
}