const { Schema, model } = require('mongoose')

const eventSchema = new Schema(
    {
        organizer: { type: Schema.Types.ObjectId, ref: 'Admin' },
        startTime: Date,
        game: { type: Schema.Types.ObjectId, ref: 'BoardGame' },
        players: [{ type: Schema.Types.ObjectId, ref: 'User' }],
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        }
    },
    {
        timestamps: true
    }
);

module.exports = model('Event', eventSchema)