// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>
//         {part1} {exercises1}
//       </p>
//       <p>
//         {part2} {exercises2}
//       </p>
//       <p>
//         {part3} {exercises3}
//       </p>
//       <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
//     </div>
//   )
// }

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <div>
      <Header course = {course} />
      <Content 
        part1 = {part1} exercises1 = {exercises1}
        part2 = {part2} exercises2 = {exercises2}
        part3 = {part3} exercises3 = {exercises3}
      />
      <Footer 
        e1 = {exercises1}
        e2 = {exercises2}
        e3 = {exercises3}
      />
    </div>
  )
}

const Header = (props) => {
  return(
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return(
    <div>
    <Part partName = {props.part1} partExercises = {props.exercises1} />
    <Part partName = {props.part2} partExercises = {props.exercises2} />
    <Part partName = {props.part3} partExercises = {props.exercises3} />
    </div>
  )
}

const Part = (props) => {
  return(
    <>
      <p>{props.partName} {props.partExercises}</p>
    </>
  )
}

const Footer = (props) => {
  return(
    <>
    <p>Number of exercises {props.e1 + props.e2 + props.e3}</p>
    </>
  )
}

export default App