import React, { useState } from "react";
import "../css/admin.css";
import { createScientist } from "../features/scientistActions";

const Admin = () => {
  const [formData, setFormData] = useState({
    name: "",
    field: "",
    nationality: "",
    biography: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    createScientist({...formData, biography: "Cool dude bro", imageUrl: "https://media.istockphoto.com/id/157568100/photo/sophisticated.jpg?s=612x612&w=0&k=20&c=v48SIeD4VSKiBV_y2vad74u-2IruTWW4zJpU_qjqCMY="});

    setFormData({
      name: "",
      field: "",
      nationality: "",
      biography: "",
    });
  };

  return (
    <div className="admin-container">
      <div className="admin-title">
        <h1>Welcome</h1>
      </div>
      <div className="panel-bio">
        <div className="admin-panel">
          <form onSubmit={handleSubmit}>
            <label>
              Name of Scientist:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Field:
              <input
                type="text"
                name="field"
                value={formData.field}
                onChange={handleChange}
              />
            </label>
            <label>
              Nationality:
              <input
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleSubmit} type="submit">Submit</button>
          </form>
        </div>
        <div className="biography-add">
          <h1>Biography:</h1>
        </div>
      </div>
    </div>
  );
};

export default Admin;
