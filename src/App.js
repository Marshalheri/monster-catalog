import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleSearch = e => {
    this.setState({
      searchField: e.target.value
    })
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
      this.setState({ monsters: users})
    })
  };

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ))

    return (
      <div className="App">
        <h1 className="appTitle">Monsters Catalog</h1>
        <SearchBox
          placeholder= "Search Monsters"
          handleSearch= {this.handleSearch}
        />
        {
          (filteredMonsters.length === 0)?
          ( <h1>No matching monster found.</h1>):
          (<CardList monsters = {filteredMonsters} /> )
        }
      </div>
    );
  }
}
  

export default App;
