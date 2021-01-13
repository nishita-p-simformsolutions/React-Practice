import React from 'react';
//import ReactDOM from 'react-dom';
import Compo from './Compo/Compo.js';
import './App.css';

class App extends React.Component {
  state = {
    persons: [
      {id: '1', name: 'Max', age: 28},
      {id: '2', name: 'Manu', age: 28},
      {id: '3', name: 'Stephen', age: 26}
    ],
    otherState: 'some other value',
    showPersons: false
  }

  buttonHandler = () => {
    //console.log('Was clicked!!');
    this.setState({persons: [
      {name: 'Maxi', age: 28},
      {name: 'Manu', age: 28},
      {name: 'Stephen', age: 27}
    ]})
  }

  nameChangeHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //console.log('Was clicked!!');
    this.setState({persons: persons} );
  }
  toggleHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inhert',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (

      <div>
        {this.state.persons.map(person => {
          return <Compo 
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event,person.id)}/>
        })}
      
      </div>
    
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.toggleHandler}>Button Name
        </button>
        {persons}
      </div>

    );
  }
}
 
export default App;
