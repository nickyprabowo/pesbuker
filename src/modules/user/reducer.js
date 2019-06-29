const initialState = {
    users: [],
    selectedUser: {},
    userAsyncState: "idle"
}

export default function user(state = initialState, action){
  switch(action.type){
    case "FETCH_ALL_USERS_REQUEST": {
      return {
        ...state,
        userAsyncState: "loading"
      }
    }

    case "FETCH_ALL_USERS_SUCCESS": {
      return {
        ...state,
        users: action.payload.data,
        userAsyncState: "loaded"
      }
    }

    case "FETCH_ALL_USERS_ERROR": {
      return {
        ...state,
        userAsyncState: "error"
      }
    }

    case "FETCH_USER_BY_ID_REQUEST": {
      return {
        ...state,
        userAsyncState: "loading"
      }
    }

    case "FETCH_USER_BY_ID_SUCCESS": {
      return {
        ...state,
        userAsyncState: "loaded",
        selectedUser: action.payload.data
      }
    }

    case "FETCH_USER_BY_ID_ERROR": {
      return {
        ...state,
        userAsyncState: "error"
      }
    }

    case "SELECT_USER": {
      return {
        ...state,
        selectedUser: action.payload.data
      }
    }

    default: {
      return state
    }
  }
}