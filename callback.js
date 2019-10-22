console.log('Before');

//? Callback-based approach
//
// getUser(1, (user) => {
//   getRepositories(user.gitHubUsername, (repos) => {
//     getCommits(repos[0], (commits) => {
//       console.log(commits);
//     })
//   })
// });

//? Promise-based approach
getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log('Commits', commits))
  .catch(err => console.log('Error', err.message));

//?  Async and Await approach
async function displayCommits() {
  try {
    const user = await getUser()
    const repos = await getRepositories(user.gitHubUsername)
    const commits = await getCommits(repos[0])
    console.log(commits)
  }
  catch (err) {
    console.log('Error', err.message)
  }
}

displayCommits()


console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) => {
    // Kick off some async work 
    setTimeout(() => {
      console.log('Reading a user from a database...');
      resolve({ id: id, gitHubUsername: 'mosh' });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Calling GitHub API...');
      resolve(['commit']);
    }, 2000);
  });
}

console.log("Before")
A((text) => {
  console.log(text)
  C((text) => {
    console.log(text)
    B((text) => {
      console.log(text)
    })
  })
})
console.log("After")

function A(callback) {
  setTimeout(() => {
    callback('Function A done')
  }, 3000)
}
function B(callback) {
  setTimeout(() => {
    callback('Function B done')
  }, 1000)
}
function C(callback) {
  setTimeout(() => {
    callback('Function C done')
  }, 2000)
}
