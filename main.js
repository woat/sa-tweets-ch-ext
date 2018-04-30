// const allTweets = [...document.querySelectorAll('.TweetTextSize')];
const allTweets = [document.querySelector('.TweetTextSize')];
allTweets.map(async function (p) {
  const url = `https://apis.paralleldots.com/v3/sentiment?text=${p.innerText}&api_key=ksfXrGlQnbn5jrJQBiGvxS0gdFVI8oHm6S3ZAxGz9EM`;
  const response = await fetch(url, { method:'POST' }).then(res => res.json());
  const colors = {
    positive: 'green',
    neutral: 'dodgerblue',
    negative: 'red'
  }

  const getValuesInOrder = [];

  for (let key in response.probabilities) {
    response.probabilities.hasOwnProperty(key) 
      ? getValuesInOrder.push([key, response.probabilities[key]]) 
      : null;
  }

  getValuesInOrder.sort((a, b) => b[1] - a[1]);

  const ul = document.createElement("div");
  getValuesInOrder.forEach(set => {
    ul.innerHTML += `<span style="color: ${colors[set[0]]};font-weight: ${response.sentiment === set[0] ? 'bold' : undefined};">${set[0]} ${set[1]} </span>`
  });

  p.appendChild(ul);
});

