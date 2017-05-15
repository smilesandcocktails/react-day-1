import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import Home from './components/home/Home'
import './index.css';

ReactDOM.render(
  <Home startupName={"Cara"} />,
  document.getElementById('root')
);


// import Animal from './Animal'
//
// let pogo = new Animal('Pogo')
// console.log(`my ${pogo.name}'s health is at ${pogo.health}'`)
// import addFive, * as arith from './arithmetic'
// console.log(arith.addThree(5))
// console.log(addFive(3))

// import addFive, {addTwo, addThree} from './arithmetic'
// console.log(addFive(5))
