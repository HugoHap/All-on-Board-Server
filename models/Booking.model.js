const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(
    {
        game: {
            type: Schema.Types.ObjectId,
            ref: 'RentGame',
            require: true
        },
        startDate: {
            type: Date,
            require: true
        },
        endDate: {
            type: Date,
            require: true
        },
        renter: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            require: true
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Booking", bookingSchema);