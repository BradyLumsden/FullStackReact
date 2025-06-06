import { useState } from 'react'

function Statistics({good, neutral, bad}){
  if(good !== 0 || neutral !== 0 || bad !== 0)
  {
    return( 
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
          <StatisticLine  text = "Good:" value = {good}/>
          <StatisticLine  text = "Neutral:" value = {neutral}/>
          <StatisticLine  text = "Bad:" value = {bad}/>
          <StatisticLine  text = "All:" value = {good + bad + neutral}/>
          <StatisticLine  text = "Average:" value = {(good*1 + bad*(-1))/(good + bad + neutral)}/>
          <StatisticLine  text = "Positive:" value = {(good/(good+bad+neutral))*100 + "%"}/>
          </tbody>
        </table>
      </>
    )
  }
  return <p>No feedback, no Stats</p>
}

function StatisticLine  ({text, value}){
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

function Button ( prop ){
  return(
    <button onClick={prop.onClick}>
      {prop.text}
    </button>
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
      
      <Button onClick={() => setGood(good + 1)} text = "Good :)" />
      <Button onClick={() => setNeutral(neutral + 1)} text = "Neutral :/"/>
      <Button onClick={() => setBad(bad + 1)} text = "Bad D:"/>
      
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App