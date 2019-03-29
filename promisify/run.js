import promisify from '../promisify';
import axios from 'axios';
import chalk from 'chalk';
import crypto from 'crypto';

export default async (username) => {
  /**
   * 
   * YOU ARE NOT ALLOWED TO MODIFY THE CODE BELOW TO SOLVE THE TASK. THIS IS JUST AN EXAMPLE USAGE
   * 
  */
  
  /**
   * 
   * FUNCTIONS DECLARATION
   * 
   */
  
  function getGitHubProfile(username, callback) {
    axios(`https://api.github.com/users/${username}`)
      .then((profile) => callback(null, profile))
      .catch((error) => callback(error.message, null))
  }
  const getGitHubProfileAsync = promisify(getGitHubProfile);

  function createToken(callback) {
    crypto.randomBytes(16, function(err, buffer) {
      if (err) { return callback(err, null); }
      callback(null, buffer.toString('hex'));
    });
  }

  const createTokenAsync = promisify(createToken);
  

  /**
   * 
   * USAGE OF THE FUNCTIONS
   * 
   */
  getGitHubProfile(username, (error, result) => {
    if (!error) {
      console.log(chalk.green('[promisify][getGitHubProfile] Success:', `${result.name} ${result.location}`));
    } else {
      console.log(chalk.red('[promisify][getGitHubProfile] Error:'), chalk.red(error));
    }
  });
  
  try {
    const result = await getGitHubProfileAsync(username);
    if (!result) throw 'No result recieved';
    console.log(chalk.green('[promisify][getGitHubProfileAsync] Success:', `${result.name} ${result.location}`));
  } catch(error) {
    console.log(chalk.red('[promisify][getGitHubProfileAsync] Error:'), chalk.red(error));
  }

  createToken((error, result) => {
    if (!error) {
      console.log(chalk.green('[promisify][createToken] Success:', `${result}`));
    } else {
      console.log(chalk.red('[promisify][createToken] Error:'), chalk.red(error));
    }
  });
  
  try {
    const result = await createTokenAsync();
    if (!result) throw 'No result recieved';
    console.log(chalk.green('[promisify][createTokenAsync] Success:', `${result}`));
  } catch(error) {
    console.log(chalk.red('[promisify][createTokenAsync] Error:'), chalk.red(error));
  }
}
