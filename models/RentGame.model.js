const { Schema, model } = require("mongoose");

const rentGameSchema = new Schema(
    {
        name: String,
        description: String,
        gameImg: {
            type: String,
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        timestamps: true,
    }
);

const RentGame = model("RentGame", rentGameSchema);

module.exports = RentGame;