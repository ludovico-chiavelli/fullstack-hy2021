import React from "react";

const Header = (props) => {
  return <h1>{props.title}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.part_name}. Number of exercises: {props.exercise_num}
    </p>
  );
};

const Total = (props) => {
  return <p> Number of exercises in total: {props.total}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header title={course} />
      <Part part_name={part1} exercise_num={exercises1} />
      <Part part_name={part2} exercise_num={exercises2} />
      <Part part_name={part3} exercise_num={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
