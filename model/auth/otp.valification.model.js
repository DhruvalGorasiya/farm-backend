const mongooes = require("mongoose");

const otpSchema = new mongooes.Schema(
  {
    email: {
      type: String,
      required: [true, "email required"],
    },
    otp: {
      type: String,
      require: [true, "Otp required"],
    },
  },
  {
    collection: "otp_verification",
    versionKey: false,
    timestamps: false,
  }
);

const otpModel = new mongooes.model(
  "OtpVarificationSchema",
  otpSchema
);

module.exports = otpModel;
