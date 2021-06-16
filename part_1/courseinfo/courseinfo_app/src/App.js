import React from "react";

const Header = (props) => {
  return <h1>{props.course.name}</h1>;
};

const Part = ({ name, exercises }) => {
  return (
    <p>
      {name}. Number of exercises: {exercises}
    </p>
  )
}

const Content = ({ course }) => {
  return (
    <div>
      <Part name={course.parts[0].name} exercises={course.parts[0].exercises}/>
      <Part name={course.parts[1].name} exercises={course.parts[1].exercises}/>
      <Part name={course.parts[2].name} exercises={course.parts[2].exercises}/>
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
