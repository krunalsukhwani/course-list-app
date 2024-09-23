import React from "react";
import "./CourseList.css";

const CourseList = (props) => {
  return (
    <ul className="course-list">
      {props.courses.map((course) => {
        return <li key={course.id}>{course.text}</li>;
      })}
    </ul>
  );
};

export default CourseList;
