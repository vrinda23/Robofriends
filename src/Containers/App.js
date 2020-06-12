import React ,{Component} from 'react';
import CardList from '../Components/CardList';
import {robots} from '../Components/robots';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends Component
{
  constructor()
  {
    super()
    this.state={
      robots:[],
      searchfield:''
    }
  }

componentDidMount(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>response.json())
  .then(users=>this.setState({robots:users})
  )
}

  onSearchChange=(event)=>{
    this.setState({searchfield:event.target.value})
  }
  render()
  {
    const filteredrobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
      return(
      <div className='tc'>
        <h1 className='f1'>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredrobots}/>
          </ErrorBoundary>
        </Scroll>
      </div>
    );
 }
}

export default App;
