export function manageFriends(state = {friends: [], }, action){
  switch(action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
    case "REMOVE_FRIEND":
      let removeFriend = state.friends.find(friend => friend.id === action.id)
      let index = state.friends.indexOf(removeFriend)
      let arr = [...state.friends]
      arr.splice(index,1)
      return {friends: arr }
    default:
      return state
  }
}
