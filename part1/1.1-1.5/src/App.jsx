function Header({course}) {
  return (
    <h1>{course}</h1>
  )
}


function Content({parts}) {
  return (
    <div>
      <Part part = {parts[0]}/>
      <Part part = {parts[1]}/>
      <Part part = {parts[2]}/>
    </div>
  )
}


function Part ({part}) {
  return(
    <div>
      <p> {part.name} {part.number}</p>
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
  const parts = [
    {name: 'Fundamentals of React', number: 10}, 
    {name: 'Using props to pass data', number:7}, 
    {name: 'State of a component', number:14},
    ]

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts} exercises = {exercises} />
      <Total total = {exercises[0] + exercises[1] + exercises[2]}/>
    </div>
  )
}

export default App