module.exports = app => {

   // BOARDGAMES ROUTES
    const boardGamesRoutes = require("./boardGames.routes.js");
    app.use("/api/boardgames", boardGamesRoutes);

    const authRoutes = require('./auth.routes')
    app.use('/api/auth', authRoutes)

    const userRoutes = require('./user.routes')
    app.use('/api/user', userRoutes)

    // HOME PAGE
    // const indexRoutes = require('./index.routes')
    // app.use('/', indexRoutes)

    // MATCH ROUTES
    const matchRoutes = require('./match.routes')
    app.use('/api/match', matchRoutes)

    // COMMENT ROUTES
    const commentRoutes = require('./comment.routes')
    app.use('/api/comment', commentRoutes)

}