import React, { useState } from 'react'
import { random, floor } from 'mathjs'

const H1 = ({title}) => {
  return <h1>{title}</h1>;
};

const Button = ({handleClick, children}) => {
  return <button onClick={handleClick}>{children}</button>
}

const Statistic = ({name, value}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>
  }

  const countTotal = (good, neutral, bad) => {
    return (good + neutral + bad)
  }
  const countAverage = (good, neutral, bad) => (good - bad) / (good + neutral + bad)
  const countPercentage = (good, neutral, bad) => good / (good + neutral + bad)

  return (
    <table>
      <tbody>
        <Statistic name="good" value={good}/>
        <Statistic name="neutral" value={neutral}/>
        <Statistic name="bad" value={bad}/>
        <Statistic name="Total" value={countTotal(good, neutral, bad)}/>
        <Statistic name="Average" value={countAverage(good, neutral, bad).toFixed(3)}/>
        {/* To fixed doesn't seem to perform consistently as sometimes it displays more digits than specified */}
        <Statistic name="Positive" value={`${countPercentage(good, neutral, bad).toFixed(3) * 100}%`}/> 
      </tbody>
    </table>
  )
}

const Anecdote = ({anecdote}) => {
  return <p>{anecdote}</p>
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [selected, setSelected] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  const handleAnecdotes = () => {
    setSelected(floor(random() * anecdotes.length))
  }

  return (
    <div>
      <H1 title="Give feedback"></H1>
      <Button handleClick={handleGoodClick}>good</Button>
      <Button handleClick={handleNeutralClick}>neutral</Button>
      <Button handleClick={handleBadClick}>bad</Button>
      <H1 title="Statistics"></H1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      <Anecdote anecdote={anecdotes[selected]}/>
      <Button handleClick={handleAnecdotes}>Next anecdote</Button>
    </div>
  )
}

export default App