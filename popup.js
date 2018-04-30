let twitter = document.getElementById('twitter');

// chrome.storage.sync.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

chrome.tabs.onUpdated.addListener(function () {
  console.log('update')
});

twitter.onclick = function(element) {
  const allTweets = [...document.querySelectorAll('.TweetTextSize')];
  allTweets.map(p => p.innerHTML += '<p>owo</p>');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        file: 'main.js'
      }
      // {code: ` [...document.querySelectorAll('.TweetTextSize')].map(p => p.innerHTML += '<p>owo</p>') `}
    );
  });
  // let color = element.target.value;
  //  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  //   chrome.tabs.executeScript(
  //     tabs[0].id,
  //     {code: 'document.body.style.backgroundColor = "' + color + '";'});
  // });
};
