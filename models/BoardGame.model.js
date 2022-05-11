const { Schema, model } = require("mongoose")

const boardGameSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        playingTime: {
            type: String,
        },
        age: {
            type: String,
        },
        gameImg: {
            type: String,
            required: true
        },
        kind: {
            type: String,
            required: true,
            enum: ["ORIGINAL", "RENT"],
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        players: {
            min: {
                type: Number,
            },
            max: {
                type: Number
            },
        },
        likes: {
            type: Number,
            default: 0
        },
        dislike: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
    }
)

module.exports = model("BoardGame", boardGameSchema)