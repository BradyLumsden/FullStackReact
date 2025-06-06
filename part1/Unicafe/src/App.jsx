import { useState } from 'react'

function Statistics({good, neutral, bad}){
  return( 
    <>
      <h1>Statistics</h1>
      <p>Good: {good} </p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      <p>All: {good + bad + neutral}</p>
      <p>Average: {(good*1 + bad*(-1))/(good + bad + neutral)}</p>
      <p>Positive: {(good/(good+bad+neutral))*100}%</p>
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback :D</h1>
      
      <button onClick={() => setGood(good + 1)}>Good :)</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral :/</button>
      <button onClick={() => setBad(bad + 1)}>Bad D:</button>
      
      <Statistics good={good} neutral={neutral} bad={bad}/>

    </div>
  )
}

export default App