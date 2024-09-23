import React from "react";
import './App.css';
import CourseList from "./Components/CourseList";

const App = () => {
  return (
    <div className="course-info">
      <h2>Course List</h2>
      <CourseList />
    </div>
  );
};

export default App;
