import React, { useState } from 'react'
import { random, floor, max } from 'mathjs'

const H1 = ({title}) => {
  return <h1>{title}</h1>;
};

const Button = ({handleClick, children}) => {
  return <button onClick={handleClick}>{children}</button>
}

const Anecdote = ({ anecdote, votes}) => {
  return (
    <div>
      <p>{anecdote}</p>
      <p>Has {votes} votes</p>
    </div>
  )
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

  const [selected, setSelected] = useState(0)
  const [points, setVote] = useState([0, 0, 0, 0, 0, 0, 0]) //Generate empty array with anecdotes variables length

  const handleAnecdotes = () => {
    let randomInt = floor(random() * anecdotes.length)
    // console.log(randomInt)
    setSelected(randomInt)
  }
  const handleVote = () => {
    console.log(typeof points)
    console.log(selected)
    const copy = [...points]
    copy[selected] += 1
    setVote(copy)
    console.log(copy)
  }

  return (
    <div>
      <H1 title="Anecdote of the day"/>
      <Anecdote anecdote={anecdotes[selected]} votes={points[selected]}/>
      <Button handleClick={handleAnecdotes}>Next anecdote</Button>
      <Button handleClick={handleVote}>Vote</Button>
      <H1 title="Anecdote with most votes"/>
      {/* Method found at https://stackoverflow.com/questions/11301438/return-index-of-greatest-value-in-an-array/11301464 */}
      <Anecdote anecdote={anecdotes[points.indexOf(max(...points))]} votes={points[points.indexOf(max(...points))]}/>
      
    </div>
  )
}

export default App