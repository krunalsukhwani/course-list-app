import React from "react";
import "./NewCourse.css";

const NewCourse = () => {
  const addCourseHandler = (event) => {
    event.preventDefault();
    const newCourse = {
      id: "COMP303",
      text: "JAVA EE Programming",
    };
    console.log(newCourse);
  };

  return (
    <form className="new-course" onSubmit={addCourseHandler}>
      <input type="text" />
      <button type="submit">Add Course</button>
    </form>
  );
};

export default NewCourse;
