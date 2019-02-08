import React, { Component } from 'react';
import { connect } from "react-redux";
import Friends from './components/Friends';
import { fetchFriends } from './actions'
import './App.css';
import CreateFriendForm from './components/CreateFriendForm'


class App extends Component {

  componentDidMount(){
  this.props.fetchFriends();
  }
  render() {
    console.log(this.props.friends)  
    return (
      <div className="App">
        <header className="App-header">
          <CreateFriendForm/>
          <Friends friends={this.props.friends} /> 
           
        </header>
      </div>
    );
  }
}

 function mapStateToProps({ friendsList }){
   return{
     friends:friendsList.friends,
     fetching:friendsList.fetchFriends
    }
  }
  export default connect(
    mapStateToProps,{fetchFriends}) (App);

  