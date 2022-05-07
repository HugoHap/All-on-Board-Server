const { Schema, model } = require("mongoose");

const bookingSchema = new Schema(
    {
        RentGame: {
            type: Schema.Types.ObjectId,
            ref: 'RentGame'
        },
        startDate: {
            type: Date
        },
        endDate: {
            type: Date
        },
        // owner: { //EL QUE LO PRESTA (??) 
        //     type: Schema.Types.ObjectId,
        //     ref: 'User'
        // },
        renter: { //EL QUE LO ALQUILA (??)
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    },
    {
        timestamps: true,
    }
);

module.exports = model("Booking", bookingSchema);