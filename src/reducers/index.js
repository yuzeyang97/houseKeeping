export default function person(state = {
  name: '于泽洋',
  age: 21,
  sex: 'man'
}, action) {
  switch (action.type) {
    case 'LOGIN':
    { const newState = { ...state };
      newState.name = '于先森';
      return newState;
    }
    default:
      return state;
  }
}
