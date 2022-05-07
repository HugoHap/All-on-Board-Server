const { Schema, model } = require("mongoose");

const boardGameSchema = new Schema(
    {
        title: String,
        description: String,
        gameImg: {
            type: String,
        },
        likes: Number,
        dislike: Number,
        players: {
            minPlayers: {
                type: Number,
                default: null
            },
            maxPlayers: {
                type: Number,
                default: null
            },
        },
        timestamps: true,
    }
);

const BoardGame = model("BoardGame", boardGameSchema);

module.exports = BoardGame;