import React from 'react';
import ReactDOM from 'react-dom';


///////////////////////////////////////////////////////////////

// function formatName(user) {
//   return user.lastName + ' ' + user.firstName;
// }

// const user = {
//   firstName: 'Hwado',
//   lastName: 'Ryo',
// };

// const element = <h1>Hello, {formatName(user)}!</h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

///////////////////////////////////////////////////////////////

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, World!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );

//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );

// }

// setInterval(tick, 1000);

///////////////////////////////////////////////////////////////

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const element = <Welcome name="呂" />;

// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

///////////////////////////////////////////////////////////////

// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="1st" />
//       <Welcome name="2nd" />
//       <Welcome name="3rd" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

////////////////////////////////////////////////////////////////

// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

/////////////////////////////////////////////////////////////////

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUmount() {
    clearInterval(this.timerID);
  }
  
  tick() {
    this.setState({
      date: new Date()
    }); 
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);