import React from "react";
function Sidebar() {
  return (
    <main>
      <aside>
        <div className="sidebar">
          <a href="/reviewerDashboard" className={"icon"}>
            <span class="material-symbols-outlined google-icon">home</span>
            <h4 className="text">HOME</h4>
          </a>
          <a className={"icon"}>
            <span class="material-symbols-outlined google-icon">
              pending_actions
            </span>{" "}
            <h4 className="text">PENDING REPORTS</h4>
          </a>
          <a className={"icon"}>
            <span class="material-symbols-outlined google-icon">
              {" "}
              clock_loader_60
            </span>
            <h4 className="text">TURN AROUND TIME</h4>
          </a>
          <a href="#" className={"icon"}>
            <span className="material-symbols-outlined google-icon">
              help_center
            </span>
            <h4 className="text">HELP</h4>
          </a>
          <a className={"icon"}>
            <span className="material-symbols-outlined google-icon">
              logout
            </span>
            <h4 className="text">LOGOUT</h4>
          </a>
        </div>
      </aside>
    </main>
  );
}

export default Sidebar;
