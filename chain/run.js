import chain from '../chain';
import chalk from 'chalk';

// Resolves with `value` after `time` milliseconds
const delay = (time, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });
}

// Throws `error` after `time` milliseconds
const throwDelay = (time, error) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(error);
    }, time);
  });
}


export default async () => {
  const promises = [
    delay(300, '1st'),
    delay(400, '2nd'),
    delay(500, '3rd'),
    // throwDelay(500, '3rd'),
    delay(300, '4th'),
  ];

  try {
    const value = await chain(promises);
    console.log(chalk.green('[chain] Success:', value));
  } catch(error) {
    console.log(chalk.red('[chain] Error:'), error.message);
  }
};
