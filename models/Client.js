import mongoose from "mongoose";
const { Schema } = mongoose;

const clientSchema = new Schema({
  name: String,
  phoneNumber: String,
  emergencyContact: String,
  notes: String,
  startOfTerm: {
    type: Date,
    default: Date.now,
  },
  endOfTerm: {
    type: Date,
    default: () => {
      const now = new Date();
      now.setMonth(now.getMonth() + 1);
      return now;
    },
    expires: "90d",
  },
  active: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("Client", clientSchema);
