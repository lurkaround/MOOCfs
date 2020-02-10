import React, {useState} from "react";
import ReactDOM from "react-dom";


const Display = ({ counter }) => <div>{counter}</div>;

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>;

const Header = props => {
  console.log(props)
  return (
  <h1>{props.course}</h1>
  )
};

const Part = props => {
  console.log(props);
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );
};


const Content = props => {
  console.log(props)
  return (
    <div>
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  );
};

const Total = props => {
  console.log(props)
  let sum = 0;
  props.parts.forEach(part => {
    sum += part.exercises;
  });

  return <p>Total number of exercises {sum}</p>;
};

const App = (props) => {
  const [counter, setCounter] = useState(0);
  const setToValue = (value)  => setCounter(value);

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
      <Display counter={counter} />
      <Button onClick={() => setToValue(counter + 1)} text='plus' />
      <Button onClick={() => setToValue(counter - 1)} text='minus' />
      <Button onClick={() => setToValue(0)} text='zero' />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
