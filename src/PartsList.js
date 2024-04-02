/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { getAllParts } from "./utils/getAllPartItems.js";

import "./PartsList.css";
import { Button } from "./Button.js";

function PartsList() {
  const [parts, setParts] = useState([]);
  const [filteredParts, setFilteredParts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        if (getAllParts) {
          const parts = await getAllParts();
          setParts(parts);
        }
      } catch (error) {
        console.log("Houston. We have a problem to get all parts", error);
      }
    }

    const filtered = parts.filter((part) =>
      part.part_file.file_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredParts(filtered);
    fetchData();
  }, [searchTerm, parts]);

  const handleDelete = (id) => {};

  return (
    <div>
      <div className="searchContainer">
        <input
          type="text"
          className="inputSearch"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search by filename..."
        />
      </div>
      <div className="listPartsContainer">
        {filteredParts.map((part) => (
          <div className="listParts" key={part.id}>
            <div>
              <h2>Identifier: {part.id}</h2>
              <h4>File name: {part.part_file.file_name}</h4>
              <h4>Units: {part.part_file.units}</h4>
              <h3>Quantity: {part.quantity}</h3>
            </div>
            <div className="buttons_container">
              <Button variant="secondary" text="Delete" onClick={() => handleDelete(part.id)} />
              {/* <button onClick={() => handleEdit(file.id)}>Edit</button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PartsList;
