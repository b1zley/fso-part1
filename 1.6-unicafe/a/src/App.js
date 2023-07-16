import { useState } from 'react'
import './App.css'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positivePercentage, setPositivePercentage] = useState('0%')

  const incrementAll = () => {
    let adjustedAll = all + 1
    setAll(adjustedAll)
    console.log('all is now: ', adjustedAll)


  }

  const incrementBad = () => {
    let adjustedBad = bad + 1;
    setBad(adjustedBad)
    console.log('bad is now: ', adjustedBad)
    incrementAll()
    calculateAverage('bad')
    calculatePositive('bad')
  }

  const incrementGood = () => {
    let adjustedGood = good + 1
    setGood(adjustedGood)
    console.log('good is now: ', adjustedGood)
    incrementAll()
    calculateAverage('good')
    calculatePositive('good')
  }


  const incrementNeutral = () => {
    let adjustedNeutral = neutral + 1
    setNeutral(adjustedNeutral)
    console.log('neutral is now: ', adjustedNeutral)
    incrementAll()
    calculateAverage('neutral')
    calculatePositive('neutral')
  }

  const calculatePositive = (text) => {
    let adjustedCount = all + 1
    let g = good


    if (text === 'good') {
      g++
    }

    let positivePercentage = g / adjustedCount * 100
    let positiveReturn = positivePercentage + '%'
    setPositivePercentage(positiveReturn)


  }


  const calculateAverage = (text) => {

    let g = good
    let b = bad * -1
    let n = 0
    console.log(text)
    if (text === 'good') {
      g++
    } else if (text === 'bad') {
      b--
    } else if (text === 'neutral') {
      n = 0
    }



    let totalCount = all + 1

    let sumOfScores = g + b + n
    let averageScore = sumOfScores / totalCount
    console.log('sum of scores is : ', sumOfScores)
    console.log('total count is : ', totalCount)
    setAverage(averageScore)
    console.log('averageScore is now: ', averageScore)

  }

  return (

    <div>
      <div className='partTitle'>Give Feedback</div>
      <div>
        <Button handleClick={incrementGood} text='good' />
        <Button handleClick={incrementNeutral} text='neutral' />
        <Button handleClick={incrementBad} text='bad' />
      </div>
      <div className='partTitle'>Statistics</div>
      <table>

        <Tracker type='good' toTrack={good} />
        <Tracker type='neutral' toTrack={neutral} />
        <Tracker type='bad' toTrack={bad} />
        <Tracker type='all' toTrack={all} />
        <Tracker type='average' toTrack={average} />
        <Tracker type='positive' toTrack={positivePercentage} />

      </table>
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

const Tracker = (props) => {
  return (
    <tr>
      <th>
        {props.type}
      </th>
      <td>
        {props.toTrack}
      </td>
    </tr>
  )
}

export default App