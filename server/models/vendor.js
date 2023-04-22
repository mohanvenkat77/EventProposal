const mongoose = require("mongoose");

const vendorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    contact: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVendor: {
      type: Boolean,
      required : true,
      default : true
    },
  },
  { timestamp: true }
);
const Vendor = mongoose.model("vendors", vendorSchema);
module.exports = Vendor;
