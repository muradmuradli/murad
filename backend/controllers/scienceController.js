import Scientist from "../models/Scientist.js";

export const getAllScientists = async (req, res) => {
  try {
    const scientists = await Scientist.find();
    res.status(200).json(scientists);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getScientists = async (req, res) => {
  try {
    const scientist = await Scientist.findById(req.params.id);
    if (!scientist) {
      res.status(404).json({ message: "No scientist" });
      return;
    }
    res.status(200).json(scientist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createScience = async (req, res) => {
  console.log(req.body);
  const scientist = new Scientist(req.body);
  try {
    const newScientist = await scientist.save();
    res.status(201).json(newScientist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateScience = async (req, res) => {
  try {
    const updatedScientist = await Scientist.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedScientist) {
      res.status(404).json({ message: "No scientist found" });
      return;
    }
    res.status(200).json(updatedScientist);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteScience = async (req, res) => {
  try {
    const deletedScientist = await Scientist.findByIdAndDelete(req.params.id);
    if (!deletedScientist) {
      res.status(404).json({ message: "No scientist found to delete" });
      return;
    }
    res.status(200).json({ message: "Scientist deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
