import { FETCH_FRIEND, SUCCESS_FRIEND, FAILURE_FRIEND } from '../actions'

const initialState = {
  fetchingFriends: false,
  friendsFetched: false,
  friendsSaved: false,
  savingFriends: false,
  updatingFriend: false,
  friendUpdated: false,
  deletingFriend: false,
  friendDeleted: false,
  friends: [],
  error: null
}

export const friendsList = (state = initialState, action) => {
  switch (action.type) {
   

      case FETCH_FRIEND:
       return {
         ...state,
         fetchingFriends:true
       }
     case SUCCESS_FRIEND:
       return {
         ...state,
         error: null,
         fetchingFriends:false,
         friends: action.payload
       }
     case FAILURE_FRIEND:
       return {
         ...state,
         fetchingFriends:false,
         error: action.payload
       }

      default:
       return state;
   }
 };
 