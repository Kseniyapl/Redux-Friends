import axios from 'axios';
export const FETCH_FRIEND = 'FETCH_FRIEND';
export const SUCCESS_FRIEND = 'SUCCESS_FRIEND';
export const FAILURE_FRIEND = 'FAILURE_FRIEND';

export const ADD_FETCH_FRIEND = 'ADD_FETCH_FRIEND';
export const ADD_SUCCESS_FRIEND = 'ADD_SUCCESS_FRIEND';
export const ADD_FAILURE_FRIEND = 'ADD_FAILURE_FRIEND';

export const DELETE_FETCH_FRIEND = 'DELETE_FETCH_FRIEND';
export const DELETE_SUCCESS_FRIEND = 'DELETE_SUCCESS_FRIEND';
export const DELETE_FAILURE_FRIEND = 'DELETE_FAILURE_FRIEND';

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIEND});
 
  axios
      .get('http://localhost:5000/api/friends')
      .then(response => {
          dispatch({ type: SUCCESS_FRIEND, payload: response.data})
      })
      .catch(error => {
        dispatch({ type: FAILURE_FRIEND, payload: error})
      })

}
export const addFriend = (friend) => dispatch => {
  dispatch({ type: ADD_FETCH_FRIEND});
  console.log('fetched');
  axios
      .get('http://localhost:5000/api/friends', friend)
      .then(response => {
          dispatch({ type: ADD_SUCCESS_FRIEND, payload: response.data})
      })
      .catch(error => {
        dispatch({ type: ADD_FAILURE_FRIEND, payload: error})
      })
    }

    
   export const deleteFriend = id => dispatch => {
    dispatch({ type: DELETE_FETCH_FRIEND });
    axios
      .delete(`http://localhost:5000/api/friends/${id}`)
      .then(response => {
          console.log(response);
          dispatch({ type: DELETE_SUCCESS_FRIEND, payload: response.data });
      })
      .catch(error => dispatch({ type: DELETE_FAILURE_FRIEND, payload: error }))
    };