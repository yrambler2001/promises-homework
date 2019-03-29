import firstPromise from '../firstPromise';
import chalk from 'chalk';

export default async () => {
  // function getGitHubProfile(username) {
  //   return axios(`https://api.github.com/users/${username}`)
  //     .then((profile) => ({
  //       name: profile.name,
  //       login: profile.login,
  //       location: profile.location,
  //     }))
  // }
  // function getGitHubRepos(username) {
  //   return axios(`https://api.github.com/users/${username}/repos`)
  //     .then((repos) => repos.map((r) => r.full_name))
  // }

  function throwInRandomTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject('Random error');
      }, Math.random()*2000)
    });
  }

  function resolveInRandomTime() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ message: 'Randomly resolved'});
      }, Math.random()*2000)
    });
  }

  try {
    const result = await firstPromise([
      throwInRandomTime(),
      resolveInRandomTime(),
    ]);
    if (!result) throw 'No result recieved';
    console.log(chalk.green('[firstPromise] Success:', JSON.stringify(result)));
  } catch(error) {
    console.log(chalk.red('[firstPromise] Error:'), error.message);
  }
};
