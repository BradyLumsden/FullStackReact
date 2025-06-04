import './App.css';


function Hello(props) {
  console.log(props)
  return (
    <div>
      <p>Hello World, we are here to destroy {props.name}! For {props.age} years! :D</p>
    </div>
  )
}


export default function App(){
  const prop = [ {name: 'Frederick', age: 32} ]
  const name = 'Frederick'
  const age = 42

  return (
    <div>
      <h1>Greetings HUMAN, here are my minions: </h1>
      <Hello name ='Lemon' age = {32} />
      <Hello name ='Sadness' age = {prop[0].age} />
      <Hello name ='Water' age ={0.000001} />
      <Hello name = {prop[0].name} age = {13} />
    </div>
  )
}