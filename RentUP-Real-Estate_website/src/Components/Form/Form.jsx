import React, { useState } from "react";
import "./form.css";
import { FaSearch } from "react-icons/fa";
const Form = () => {
  const [inputData, setInputData] = useState({
    location: "",
    propertyType: "",
    range: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputData)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>City/Street</label>
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={inputData.location}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Property Type</label>
        <input
          type="text"
          placeholder="Property Type"
          name="propertyType"
          value={inputData.propertyType}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Price Range</label>
        <input
          type="text"
          placeholder="Price Range"
          name="range"
          value={inputData.range}
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <h4>Advance Filter</h4>
        <button type="submit">
          <FaSearch />
        </button>
      </div>
    </form>
  );
};

export default Form;
