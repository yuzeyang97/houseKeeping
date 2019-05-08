export default function person(state = {
  isLogin: false,
  token: '',
}, action) {
  switch (action.type) {
    case 'LOGIN':
    { const newState = { ...state, isLogin: true, token: action.token };
      return newState;
    }
    case 'GET_INFO':
    {
      const newState = { ...state, isLogin: true, ...action.data };
      return newState;
    }
    default:
      return state;
  }
}

