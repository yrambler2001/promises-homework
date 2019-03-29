/**
 * Implement a function that resolves when all the promises are resolved.
 * Execute next promise only AFTER the previous ended.
 * It is not allowed to execute any next promise if the current is rejected
 * If any promise in the chain is rejected, then reject the promise and return error
 * 
 * @param {[Promise]} promises - array of promises
 * @returns {Promise}
 *  
*/

export default function chain(promises) {
  return new Promise(async (resolve, reject) => {
    // TODO: implement
  });
}