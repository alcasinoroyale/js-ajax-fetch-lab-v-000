function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '7dfd572208d5c85187e5bdae56dc237cb0351da5';
}

const baseURL = 'https://api.github.com'
const user = 'alcasinoroyale';

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
    const url = `${baseURL}/repos/${repo}/forks`;
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization : `token ${getToken()}`
    }
  })
  .then(response => response.json())
  .then(json => showResults(json));
}

function showResults(json) {
    document.getElementById('results').innerHTML = `<a href="${json.html_url}">${json.html_url}</a>`;
}

function createIssue() {
  const repo = `${user}/js-ajax-fetch-lab`;
  const url = `${baseURL}/repos/${repo}/issues`;
  const postData = {
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  };

  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => getIssues());
}

function getIssues() {
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
