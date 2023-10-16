import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "./topbar";
import Sidebar from "./sidebar";

function Draft() {
  const [draftData, setdraftData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/getreviewer")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setdraftData(response.data.filter((user) => user.isdraft === true));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = `${date.getDate()} - ${
      date.getMonth() + 1
    } - ${date.getFullYear()}`;
    return formattedDate;
  }
  return (
    <div>
      <Topbar />
      <div className="revcontent">
        <Sidebar />
        <div className="revcontainer">
          <div className="heading">Draft</div>
          <table class="draft">
            <thead>
              <tr>
                <th>DRAFT DOCUMENT</th>
                <th>START DATE</th>
                <th>LAST MODIFIED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {draftData.map((item) => (
                <tr key={item.id}>
                  <td className="paddingleft">{item.file_name}</td>
                  <td>{formatDate(item.assigned_dt)}</td>
                  <td>{formatDate(item.updated_dt)}</td>
                  <td>
                    <button className="continuebutton">CONTINUE</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Draft;
