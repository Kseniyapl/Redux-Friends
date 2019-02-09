import React, { Component } from 'react';
import { addFriend } from '../actions';
import { connect } from 'react-redux';


 class CreateFriendForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }


     changeHandler = event => {
      event.preventDefault();
        this.setState({
          [event.target.name]: event.target.value
        });
      };

       submitHandler = (event) => {
         event.setState();
         this.props.addFriend(this.state)
         console.log(this.state)
       }

     render() {

       return (

          <form>
            <input
            onChange={this.changeHandler}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
          />
            <input
            onChange={this.changeHandler}
            type="number"
            name="age"
            value={this.state.age}
            placeholder="Age"
          />
          <input
            onChange={this.changeHandler}
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Email"
          />
          <button onClick={this.submitHandler}>Add Friend</button>
         { /*<button onClick={this.submitHandler}>Update</button>*/}

          </form>

       );
    }
  }
  const mapStateToProps = state => {
    return {
      friends: state.friends
    }}
    

 export default connect (mapStateToProps, { addFriend: addFriend })(CreateFriendForm); 