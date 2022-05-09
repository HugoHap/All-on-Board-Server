module.exports = app => {

    // const indexRoutes = require("./index.routes");
    // app.use("/", inindexRoutesdex);

    const boardGamesRoutes = require("./boardGames.routes.js");
    app.use("/api/boardgames", boardGamesRoutes);

    const authRoutes = require('./auth.routes')
    app.use('/api/auth', authRoutes)

    const userRoutes = require('./user.routes')
    app.use('/api/user', userRoutes)

    // HOME PAGE
    // const indexRoutes = require('./index.routes')
    // app.use('/', indexRoutes)

    // MATCH PAGE
    const matchRoutes = require('./match.routes')
    app.use('/api/match', matchRoutes)

    // // EVENT PAGE
    // const eventRoutes = require('./event.routes')
    // app.use('/api/event', eventRoutes)
}