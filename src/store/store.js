const {createStore} = require("redux");

const initialState = {
  cardList: {
    data: [],
    isLoading: true,
    error: null
  },
  slideList: {
    data: [],
    isLoading: true,
    error: null
  },
  burgerMenu: {
    isOpen: false,
    error: null
  },
  burgerMenuList: {
    data: {},
    isLoading: true,
    error: null
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CARDS": {
      return {
        ...state, cardList: {data: [...action.payload], isLoading: false}
      };
    }
    case "SET_SLIDES": {
      return {
        ...state, slideList: {data: [...action.payload], isLoading: false}
      };
    }
    case "TOGGLE_MENU": {
      return {
        ...state, burgerMenu: {isOpen: action.payload}
      };
    }
    case "SET_BURGER-MENU": {
      return {
        ...state, burgerMenuList: {data: {...action.payload}, isLoading: false}
      };
    }
    default:
      return state
  }
}

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store