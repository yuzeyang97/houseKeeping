// import axios from 'axios';

// export function callServerApi(endpoint, params) {
//   const data = { ...params };
//   const axiosMethod = 'POST';

//   return new Promise((resolve, reject) => (
//     axios({
//       method: axiosMethod,
//       url,
//       data: JSON.stringify(data),
//       timeout: 10000
//     })
//       .then(response => {
//         if (response.data.ret !== 1) {
//           return reject(response.data);
//         }
//         return response.data;
//       })
//       .catch(err => {
//         const rErr = { msg: JSON.stringify(err) };
//         return reject(rErr);
//       })
//   ));
// }

// export const API = 'API';

// /* eslint-disable no-unused-vars */
// export default store => next => action => {
//   const serverAPI = action[API];
//   if (typeof serverAPI === 'undefined') {
//     return next(action);
//   }

//   const {
//     type,
//     endpoint,
//     params,
//     success,
//     fail
//   } = serverAPI;

//   if (typeof endpoint !== 'string') {
//     throw new Error('Specify a string endpoint.');
//   }
//   if (typeof params !== 'object') {
//     throw new Error('Specify a object params.');
//   }
//   if (!(typeof type === 'string')) {
//     throw new Error('Expected action type to be strings.');
//   }
//   function actionWith(data) {
//     const finalAction = Object.assign({}, action, data);
//     delete finalAction[API];
//     return finalAction;
//   }

//   const requestType = `${type}_REQ`;
//   const successType = `${type}_SUC`;
//   const failureType = `${type}_FAI`;

//   const { auth } = store.getState();

//   const _params = {
//     ...params,
//     token: auth.user.token
//   };

//   next(actionWith({ type: requestType, _endpoint: endpoint, _params }));

//   return callServerApi(endpoint, _params)
//     .then(response => {
//       const nextAction = actionWith({
//         _endpoint: endpoint,
//         _params,
//         response,
//         type: successType
//       });
//       const nextActionResult = next(nextAction);
//       success && success(nextAction);
//       return nextActionResult;
//     })
//     .catch(err => {
//       const msg = err.msg || err.message || '网络错误，请稍后再试';
//       const nextAction = actionWith({
//         _endpoint: endpoint,
//         _params,
//         type: failureType,
//         msg
//       });
//       next(nextAction);
//       fail && fail(nextAction);
//       return Promise.reject(err);
//     });
// };
