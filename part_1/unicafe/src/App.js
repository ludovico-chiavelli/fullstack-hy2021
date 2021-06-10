import React, { useState } from 'react'

const H1 = ({title}) => {
  return <h1>{title}</h1>;
};

const Button = ({handleClick, children}) => {
  return <button onClick={handleClick}>{children}</button>
}

const Statistics = ({good, neutral, bad}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  }
  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {good + neutral + bad}</p>
      <p>Average: {(good - bad)/(good + neutral + bad)}</p>
      <p>Positive: {good / (good + neutral + bad) * 100}%</p>
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