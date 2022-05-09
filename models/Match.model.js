const { Schema, model } = require('mongoose')

const matchSchema = new Schema(
    {
        organizer: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        startTime: {
            type: Date,
            required: true,
        },
        boardGame: {
            type: Schema.Types.ObjectId,
            ref: 'BoardGame',
            require: true
        },
        location: {
            type: {
                type: String
            },
            coordinates: [Number],
        },
        type: {
            type: String,
            enum: ["MATCH", "EVENT"],
        },
        players: [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
    },
    {
        timestamps: true
    }
);

module.exports = model('Match', matchSchema)