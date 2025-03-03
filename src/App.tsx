import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DisplayAllEvents from "./components/DisplayAllEvents";
import UpcomingEvent from "./components/UpcomingEvent";
import SearchEvent from "./components/SearchEvent";
import NavBar from "./components/NavBar"; 
import Login from "./components/Login";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/disall" element={<DisplayAllEvents />} />
          <Route path="/upev" element={<UpcomingEvent />} />
          <Route path="/srev" element={<SearchEvent />} />
          <Route path="*" element={<div>Page Not Found</div>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
