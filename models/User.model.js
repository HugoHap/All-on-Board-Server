const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, "Indica el correo electrónico"],
    },
    username: {
      type: String,
      required: [true, "Indica el nombre de usuario"],
    },
    password: {
      type: String,
      required: true,
    },
    favouriteGames: [{
      type: Schema.Types.ObjectId,
      ref: 'Boardgame'
    }],
    role: {
      type: String,
      enum: ['USER', 'ADMIN'],
      default: 'USER'
    },
    avatar: {
      type: String,
      default: "https://i.stack.imgur.com/l60Hf.png"
    },
    matches: [{
      type: Schema.Types.ObjectId,
      ref: 'Match'
    }],

  },
  {

    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
