function Header({course}) {
  return (
    <h1>{course}</h1>
  )
}


function Content({parts, exercises}) {
  return (
    <div>
      <p>{parts[0]} {exercises[0]}</p>
      <p>{parts[1]} {exercises[1]}</p>
      <p>{parts[2]} {exercises[2]}</p>
    </div>
  )
}


function Total({ total }) {
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const exercises = [10, 7, 14]
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} exercises = {exercises} />
      <Total total = {exercises[0] + exercises[1] + exercises[2]}/>
    </div>
  )
}

export default App