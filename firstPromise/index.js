/**
 * @param {[Promise]} promises - array of promises
 * @returns {Promise} - a promise that is resolved or rejected,
 * resolving with whatever the resolved value or rejection reason was from
 * the first to be resolved/rejected promise in the array
 */

export default function firstPromise(promises) {
  return new Promise( function(resolve, reject) {
    Promise.race(promises).then(result=>resolve(result)).catch(error=>reject(error));
  });
};
