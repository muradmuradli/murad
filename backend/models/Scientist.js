import mongoose from "mongoose";

const scientistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  biography: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  }
});

const Scientist = mongoose.model("Scientist", scientistSchema);

export default Scientist;
