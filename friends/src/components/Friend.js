import React from 'react';
import { connect } from 'react-redux';
import { deleteFriend } from '../actions';

const Friend = props => {
  return (
    <div className="card" >
        <div onClick={() => props.updateFriend(props.friend)}>

            <h4 >{props.friend.name}</h4>
            <div className="info">
                <p >age:  {props.friend.age}</p>
                <p >email:  {props.friend.email}</p> 
            </div>
        </div>
        <button onClick={() => props.deleteFriend(props.friend.id)}> Delete </button>
    </div> 
    )
}

export default connect(null, { deleteFriend })(Friend);
