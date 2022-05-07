const { Schema, model } = require('mongoose')

const matchSchema = new Schema(
    {
        organizer: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        startTime: Date,
        game: {
            type: Schema.Types.ObjectId,
            ref: 'BoardGame'
        },
        players: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
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

module.exports = model('Match', matchSchema)