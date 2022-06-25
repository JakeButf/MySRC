var showGameStats = false;
var leaderboardWidth;

function saveSettings()
{
  //Right sidebar
  mySRC.storeSettings();
}

window.onload = function()
{
  mySRC.loadSettings();
  updateControls();
}

//Show Sidebar Checkbox
const gameStatsObj = document.getElementById('gameStats');
console.log(gameStatsObj);
gameStatsObj.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  showGameStats = document.getElementById('gameStats').checked;
  mySRC.storeSettings();
});

//Leaderboard Width Numbox
const leaderboardWidthObj = document.getElementById('leaderboardWidth');
leaderboardWidthObj.addEventListener('change', (event) => {
  const result = document.querySelector('.result');
  leaderboardWidth = document.getElementById('leaderboardWidth').value;
  mySRC.storeSettings();
})

function updateControls()
{
  console.log("updating controls");
  document.getElementById('gameStats').checked = mySRC_showGameStats;
  document.getElementById('leaderboardWidth').value = mySRC_leaderboardWidth;
}






/*chrome.storage.sync.set({key: value}, function() {
    console.log('Value is set to ' + value);
  });
  
  chrome.storage.sync.get(['key'], function(result) {
    console.log('Value currently is ' + result.key);
  });*/