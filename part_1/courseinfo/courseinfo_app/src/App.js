import React from "react";

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <p>
        {props.course.parts[0].name}. Number of exercises:
        {props.course.parts[0].exercises}
      </p>
      <p>
        {props.course.parts[1].name}. Number of exercises:
        {props.course.parts[1].exercises}
      </p>
      <p>
        {props.course.parts[2].name}. Number of exercises:
        {props.course.parts[2].exercises}
      </p>
    </div>
  );
};

const Total = (props) => {
  console.log(props);
  let total = 0;
  props.course.parts.forEach((element) => (total += element.exercises));
  return <p>Number of exercises in total: {total}</p>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course}></Content>
      <Total course={course} />
    </div>
  );
};

export default App;
