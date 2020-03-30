export function login(token) {
  return {
    type: 'LOGIN',
    token
  };
}

export function getInfo(data) {
  return {
    type: 'GET_INFO',
    data
  };
}

export function logout() {
  return {
    type: 'LOGOUT'
  };
}

