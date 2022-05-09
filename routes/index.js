module.exports = app => {

   // BOARDGAMES ROUTES
    const boardGamesRoutes = require("./boardGames.routes.js");
    app.use("/api/boardgames", boardGamesRoutes);
    
    // AUTH ROUTES
    const authRoutes = require('./auth.routes')
    app.use('./api/auth', authRoutes)

    // MATCH ROUTES
    const matchRoutes = require('./match.routes')
    app.use('/api/match', matchRoutes)

    // COMMENT ROUTES
    const commentRoutes = require('./comment.routes')
    app.use('/api/comment', commentRoutes)

}