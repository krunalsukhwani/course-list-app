import React from "react";
import './App.css';
import CourseList from "./Components/CourseList";
import NewCourse from "./Components/NewCourse";

const App = () => {

  const courseList = [
    { id:'COMP229', text: 'Web Application Development'},
    { id:'COMP228', text: 'Java Programming'},
    { id:'COMP214', text: 'Advanced Database Concepts'},
    { id:'COMP212', text: 'Programming 3'}
  ];

  return (
    <div className="course-info">
      <h2>Course List</h2>
      <NewCourse />
      <CourseList courses={courseList}/>
    </div>
  );
};

export default App;
