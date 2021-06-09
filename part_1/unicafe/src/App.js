import React, { useState } from 'react'

const H1 = (props) => {
  return <h1>{props.title}</h1>;
};

const Button = (props) => {
  return <button onClick={props.handleClick}>{props.children}</button>
}

const Statistics = (props) => {
  return (
    <div>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <H1 title="Give feedback"></H1>
      <Button handleClick={handleGoodClick}>good</Button>
      <Button handleClick={handleNeutralClick}>neutral</Button>
      <Button handleClick={handleBadClick}>bad</Button>
      <H1 title="Statistics"></H1>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App