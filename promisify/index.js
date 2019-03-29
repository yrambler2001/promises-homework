/**
 * Write a function `promisify` that receives a function `fn` as an argument.
 * `fn` is a node-style function that receives arguments and last parameter is always a callback function
 * The callback function is called with 2 arguments: `error` and `result`
 * 
 * `promisify` should return a function which when invoked calls the `fn` and returns a promise
 * which resolves with `result` if the call is successful, else rejects with `error`
 * 
 * 
 * Because the returned function returns a promise, it does and should not
 * expect a callback function as one of its arguments
 * 
 * See example usage in the run.js
*/

export default function promisify(fn) {
  return function(...args) {
    // TODO: implement
    fn(...args, () => {});
  };
};

