import axios from 'axios';
export const FETCH_FRIEND = 'FETCH_FRIEND';
export const SUCCESS_FRIEND = 'SUCCESS_FRIEND';
export const FAILURE_FRIEND = 'FAILURE_FRIEND';


export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCH_FRIEND});
  console.log('fetched');
  axios
      .get('http://localhost:5000/api/friends')
      .then(response => {
          dispatch({ type: SUCCESS_FRIEND, payload: response.data})
      })
      .catch(error => {
        dispatch({ type: FAILURE_FRIEND, payload: error})
      })

}
