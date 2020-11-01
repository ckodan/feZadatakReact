import React, { useState, useEffect } from "react";
import Datatable from "./datatable"
import { Users } from "./data.js";
import "./main.css";

export default function App(props) {
  const [data, setData] = useState([]);
  const[q, setQ] = useState("");

  useEffect(() => {
    setData(Users);
  }, []);

  function search(rows) {
    const columns = rows[0] && Object.keys(rows[0]);

    return rows.filter(
      (row) => 
        columns.some(
          (column) => row[column].toString().toLowerCase().indexOf(q.toLocaleLowerCase()) > -1)
    );
  }

  return (
    <div>
      <div>
        <label>Filter: </label> 
        <input type="text" value={q} onChange={(e) => setQ(e.target.value)}/>
      </div>      
      <Datatable data={search(data)} />
    </div>
  );
}