import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

let User;
try {
  // Check if the model already exists to prevent redefinition
  User = mongoose.model("User");
} catch {
  // If the model doesn't exist, define it
  User = mongoose.model("User", userSchema);
}

export default User;
