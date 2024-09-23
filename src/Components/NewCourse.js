import React, {useState} from "react";
import "./NewCourse.css";

const NewCourse = props => {

  const [enteredCourse, setEnteredCourse] = useState('');

  const addCourseHandler = (event) => {
    event.preventDefault();
    const newCourse = {
      id: Math.random().toString(),
      text: enteredCourse,
    };
    
    setEnteredCourse('');

    props.onAddCourse(newCourse);
  };

  const textChangeHandler = event => {
    setEnteredCourse(event.target.value);
  };

  return (
    <form className="new-course" onSubmit={addCourseHandler}>
      <input type="text" value={enteredCourse} onChange={textChangeHandler}/>
      <button type="submit">Add Course</button>
    </form>
  );
};

export default NewCourse;
