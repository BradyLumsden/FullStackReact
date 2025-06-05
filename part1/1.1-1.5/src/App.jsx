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


function Total({ parts }) {
  return (
    <div>
      <p>Number of exercises {parts[0].number + parts[1].number + parts[2].number}</p>
    </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {name: 'Fundamentals of React', number: 10}, 
    {name: 'Using props to pass data', number:7}, 
    {name: 'State of a component', number:14},
    ]

  return (
    <div>
      <Header course = {course} />
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </div>
  )
}

export default App