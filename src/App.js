import React, { Component } from 'react';
import './App.css';
// import './Greetings'
import {PageNotFound} from './pages/PageNotFound';
import {HomePage} from './pages/HomePage'; // after using named export we need to use {}
import {PeopleListPage} from './pages/PeopleListPage';

import {CounterButtonPage} from './pages/CounterButtonPage';
//import {CongratulationsMessage} from './PeopleListPage'
// import {useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import {PeopleListItem} from './PeopleListItem'

// hoisting the state 




// function App() {
//   return(
//     <div className="App">
//       <center>
//         <h2>Welcome to React</h2>
//         <button class="btn btn-success">Get Started</button>
//       </center>
//     </div>
//   );
  
// }

class App extends Component{
  constructor(props){
    super(props);
    this.state = {liked:false};
  }

  handleClick=(event)=>{
    this.setState({liked:!this.state.liked});
  }

  render(){
    var text = this.state.liked ? 'like' : 'not lilke'
    return(
      <p onClick={this.handleClick}>
        your {text} this. click to toggle
      </p>
    );
  }
}
export default App;
