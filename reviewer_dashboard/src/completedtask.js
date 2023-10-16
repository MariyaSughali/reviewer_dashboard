import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "./topbar";
import Sidebar from "./sidebar";

function CompletedTask() {
  const [completedData, setcompletedData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/getreviewer")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setcompletedData(
            response.data.filter((user) => user.iscompleted === true)
          );
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <Topbar />
      <div className="revcontent">
        <Sidebar />
        <div className="revcontainer">
          <div className="heading">Completed Task</div>
          <table class="todo">
            <thead>
              <tr>
                <th>
                  <strong>COMPELETED TASK</strong>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {completedData.map((item) => (
                <tr key={item.id}>
                  <td>{item.file_name}</td>
                  <td>
                    <button className="viewbutton">VIEW</button>
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

export default CompletedTask;
