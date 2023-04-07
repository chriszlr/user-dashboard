import { Schema, model } from "mongoose";

const CustomerSchema = new Schema(
  {
    name: {
      first: {
        type: String,
        required: true,
        maxlength: 50,
      },
      last: {
        type: String,
        required: true,
        maxlength: 50,
      },
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["Completed", "Processing", "On Hold"],
      required: true,
    },
    method: {
      type: String,
      enum: ["Visa", "MasterCard", "PayPal", "Check"],
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Customer", CustomerSchema);
