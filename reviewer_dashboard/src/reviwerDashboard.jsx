import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Topbar from "./topbar";
import Sidebar from "./sidebar";

function ReviwerDashboard() {
  const [draftData, setdraftData] = useState([]);
  const [completedData, setcompletedData] = useState([]);
  const [todotask, settodoData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3030/getTodoList").then((response) => {
      if (response.data && response.data.length > 0) {
        settodoData(response.data.filter((user) => user.iscompleted === true));
      }
    });
    axios
      .get("http://localhost:3030/getreviewer")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          setdraftData(response.data.filter((user) => user.isdraft === true));
          setcompletedData(
            response.data.filter((user) => user.iscompleted === true)
          );
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
          <div className="revrow1">
            <div className="revcolumn1">
              <table class="table1 ">
                <thead>
                  <tr>
                    <th>
                      <strong>TO DO LIST</strong>
                    </th>
                    <th>
                      <strong>ASSIGNED ON</strong>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {todotask.slice(0, 4).map((item) => (
                    <tr key={item.id}>
                      <td>{item.file_name}</td>
                      <td>{formatDate(item.assigned_dt)}</td>
                      <td>
                        <button className="startbutton">START</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a href="/todotask">
                {" "}
                <span class="material-symbols-outlined expand">fullscreen</span>
              </a>
            </div>
            <div className="revcolumn2">
              <table class="table2">
                <thead>
                  <tr>
                    <th>
                      <strong>COMPELETED TASK</strong>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {completedData.slice(0, 4).map((item) => (
                    <tr key={item.id}>
                      <td>{item.file_name}</td>
                      <td>
                        <button className="viewbutton">VIEW</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <a href="./completed">
                {" "}
                <span class="material-symbols-outlined expand">fullscreen</span>
              </a>
            </div>
          </div>
          <div className="revrow2">
            <table className="table3">
              <thead>
                <tr>
                  <th>DRAFT DOCUMENT</th>
                  <th>START DATE</th>
                  <th>LAST MODIFIED</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {draftData.slice(0, 4).map((item) => (
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
            <a href="/draft">
              {" "}
              <span class="material-symbols-outlined expand">fullscreen</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviwerDashboard;
