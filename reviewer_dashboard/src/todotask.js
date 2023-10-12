import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Topbar from "./topbar";
import Sidebar from "./sidebar";

function TodoTask() {
  const [todotask, settodoData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3030/getreviewer")
      .then((response) => {
        if (response.data && response.data.length > 0) {
          settodoData(
            response.data.filter(
              (user) => user.isdraft === null && user.iscompleted === null
            )
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
          <div className="heading">To Do Task</div>
          <table class="todo">
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
        </div>
      </div>
    </div>
  );
}

export default TodoTask;
