const mongooes = require("mongoose");

const UserSignUpSchema = mongooes.Schema(
  {
    userName: { type: String, required: true },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: function (v) {
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email",
      },
      require: [true, "Email required"],
    },
    phone: { type: String, require: [true, "Phone required"] },
    password: { type: String, require: [true, "Password required"] },
  },
  {
    collection: "users",
    versionKey: false,
    timestamps: true,
    toObject: {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret.password;
        return ret;
      },
    },
  }
);

const userModel = mongooes.model("UserSignUpSchema", UserSignUpSchema);

module.exports = userModel;
