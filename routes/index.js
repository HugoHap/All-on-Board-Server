module.exports = app => {

    const authRoutes = require('./auth.routes')
    app.use('./api/auth', authRoutes)
}