import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,

      required: true,
    },
    passwors: {
      type: String,
      required: true,
    },
  },
  { timestamps: truue },
);

const User = mongoose.Model("user", UserSchema);
export default User;
