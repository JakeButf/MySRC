//SCUFFED SOLUTION LOL
var mySRC = mySRC || {};
var mySRC_showGameStats;
var mySRC_leaderboardWidth;

mySRC.storeSettings = function()
{
    //localStorage.setItem('chrome_showGameStats', JSON.stringify(showGameStats));
    //console.log(localStorage.chrome_showGameStats);

    chrome.storage.sync.set({chrome_showGameStats: showGameStats}, function() {
        console.log(showGameStats);
    });

    chrome.storage.sync.set({chrome_leaderboardWidth: leaderboardWidth}, function() {
        console.log(leaderboardWidth);
    });
}

mySRC.loadSettings = function()
{
    //mySRC_showGameStats = JSON.parse(localStorage.getItem('chrome_showGameStats'));
    //console.log(localStorage.chrome_showGameStats);

    chrome.storage.sync.get(['chrome_showGameStats'], function(result) {
        mySRC_showGameStats = Boolean(result.chrome_showGameStats);
        console.log(mySRC_showGameStats);
        updateControls();
    });

    chrome.storage.sync.get(['chrome_leaderboardWidth'], function(result) {
        mySRC_leaderboardWidth = parseInt(result.chrome_leaderboardWidth);
        console.log(mySRC_leaderboardWidth);
        updateControls();
    })
    
}

mySRC.loadSettings();