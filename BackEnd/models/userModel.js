import mongoose from 'mongoose';

// with mongoose, everything is derived from a Schema
const userSchema = mongoose.Schema(
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
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false, // when a user registers , they're not an admin
    },
  },
  {
    timestamps: true,
  }
);

// compiling schema into a model
const User = mongoose.model('User', userSchema);

export default User;
