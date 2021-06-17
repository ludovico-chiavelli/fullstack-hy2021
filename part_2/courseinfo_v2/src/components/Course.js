import React from 'react'

const Course = ({ courses }) => {
    return (
      <div>
        {courses.map(course => {
          return (
            <div>
              <Header course={course}/>
              <Content course={course}/>
            </div>
          )
        })}
      </div>
    )
  }
  
  const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
  }
  
  const Total = ({ course }) => {
    const total = course.parts.reduce((acc, part) => acc + part.exercises, 0)
    return(
      <p>
        <b>Number of exercises {total}</b>
      </p>
    ) 
  }
  
  const Part = ({ name, exercises} ) => {
    return (
      <p>
        {name}: {exercises}
      </p>    
    )
  }
  
  const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => <Part name={part.name} exercises={part.exercises}/>)}
        <Total course={course}/>
      </div>
    )
  }

export default Course