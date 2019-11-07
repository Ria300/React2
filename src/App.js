import React, { Component } from 'react';
import './App.css';
import Message from './components/Message'
import Login from './components/Login'
import Logout from './components/Logout'
class App extends Component {
  constructor(props)   
  {   
      super(props);    
      this.handleLogin = this.handleLogin.bind(this);  
        this.handleLogout = this.handleLogout.bind(this);   
    this.state = {isLoggedIn : false};   
  }   
 handleLogin()   
  {   
      this.setState({isLoggedIn : true});   
  }   
  handleLogout()   
  {   
      this.setState({isLoggedIn : false});   
  }   
  render(){   
      return(   
          <div>   
      <h1> Conditional Rendering Example </h1>  
              <Message isLoggedIn={this.state.isLoggedIn}/>               
              {   
                  (this.state.isLoggedIn)?(   
                  <Logout clickInfo={this.handleLogout} />   
                  ) : (   
                  <Login clickInfo={this.handleLogin} />   
                  )   
              }   
          </div>         
          );   
  }   
}   
export default App;
