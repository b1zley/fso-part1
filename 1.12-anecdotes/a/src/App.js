import { useState } from 'react'



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]






  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Uint8Array(8))

  const [highest, setHighest] = useState(0)

  const selectHighestVotes = (copiedArray) => {
    let currentMax = 0
    for (let i = 0; i < copiedArray.length; i++) {

      if (copiedArray[i] > currentMax) {
        currentMax = copiedArray[i]
        setHighest(i)
      }
    }
  }

  const randomizeAnecdote = () => {


    while (true) {
      let generatedNumber = Math.floor(Math.random() * anecdotes.length);
      if (generatedNumber === selected) {
        continue;
      } else {
        setSelected(generatedNumber)
        break;
      }
    }

  }

  const increaseVotes = () => {
    const copyPoints = [...points]
    copyPoints[selected] += 1
    setPoints(copyPoints)
    selectHighestVotes(copyPoints)
  }

  return (
    <div>
      <Display
        title='Anecdote of the day'
        anecdotes={anecdotes}
        points={points}
        selected={selected}
      />
      <div>
        <Button handleClick={increaseVotes} text='vote' />
        <Button handleClick={randomizeAnecdote} text='next anecdote' />

      </div>

      <div>
        <Display
          title='Current Highest'
          anecdotes={anecdotes}
          points={points}
          selected={highest}
        />
      </div>
    </div>
  )
}


const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <div className='division'>
      <div className='title'>
        {props.title}
      </div>
      <div>
        {props.anecdotes[props.selected]}
      </div>
      <div>
        has {props.points[props.selected]} votes
      </div>

    </div>
  )
}




export default App