import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReviewerDashboard from "./reviwerDashboard";
import TodoTask from "./todotask";
import Draft from "./draft";
import CompletedTask from "./completedtask";

function MyApp() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/reviewerDashboard" element={<ReviewerDashboard />} />
          <Route path="/todoTask" element={<TodoTask />} />
          <Route path="/draft" element={<Draft />} />
          <Route path="/completed" element={<CompletedTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyApp;
