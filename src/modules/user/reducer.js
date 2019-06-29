const initialState = {
    users: [],
    selectedUser: {},
    asyncState: "idle"
}

export default function user(state = initialState, action){
  switch(action.type){
    case "FETCH_ALL_USERS_REQUEST": {
      return {
        ...state,
        asyncState: "loading"
      }
    }

    case "FETCH_ALL_USERS_SUCCESS": {
      return {
        ...state,
        users: action.payload.data,
        asyncState: "loaded"
      }
    }

    case "FETCH_ALL_USERS_ERROR": {
      return {
        ...state,
        asyncState: "error"
      }
    }

    case "FETCH_USER_BY_ID_REQUEST": {
      return {
        ...state,
        asyncState: "loading"
      }
    }

    case "FETCH_USER_BY_ID_SUCCESS": {
      return {
        ...state,
        asyncState: "loaded",
        selectedUser: action.payload.data
      }
    }

    case "FETCH_USER_BY_ID_ERROR": {
      return {
        ...state,
        asyncState: "error"
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