var usernameSize = "15px";

updateCSSInject = function() 
{
    //Removing sidebar / ads
    console.log(mySRC_showGameStats);
    if(mySRC_showGameStats == false)
    {
        var elements = document.getElementsByClassName("bs-col-12 ");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
        elements = document.getElementsByClassName("hidden-md-down");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }

        elements = document.getElementsByClassName("sc-1i7jkv7-1 fofRY");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }

        document.getElementById("widget").style.visibility = "hidden";
        document.getElementById("centerwidget").setAttribute('style', 'width:'+ mySRC_leaderboardWidth + '% !important');
    }
    

    //Font changer
    //Leaderboard Rows
    elements = document.getElementsByClassName("cell0 leaderboard-row linked");
    for(let i = 0; i < elements.length; i++)
    {
        elements[i].style.fontSize = usernameSize;
        elements[i].style.fontFamily = '"Helvetica Neue",Helvetica,Arial,sans-serif';
    }
    elements = document.getElementsByClassName(" leaderboard-row linked");
    for(let i = 0; i < elements.length; i++)
    {
        elements[i].style.fontSize = usernameSize;
        elements[i].style.fontFamily = '"Helvetica Neue",Helvetica,Arial,sans-serif';
    }
    //Leaderboard Tabs
    elements = document.getElementsByClassName("category-tab-name active");
    for(let i = 0; i < elements.length; i++)
    {
        elements[i].style.fontSize = usernameSize;
        elements[i].style.textTransform = "none";
        elements[i].style.fontFamily = '"Helvetica Neue",Helvetica,Arial,sans-serif';
    }
    elements = document.getElementsByClassName("category-tab-name");
    for(let i = 0; i < elements.length; i++)
    {
        elements[i].style.fontSize = usernameSize;
        elements[i].style.fontFamily = '"Helvetica Neue",Helvetica,Arial,sans-serif';
        elements[i].style.textTransform = "none";
    }
    elements = document.getElementsByClassName("widget-title");
    for(let i = 0; i < elements.length; i++)
    {
        elements[i].style.fontSize = usernameSize;
        elements[i].style.fontFamily = '"Helvetica Neue",Helvetica,Arial,sans-serif';
        elements[i].style.textTransform = "none";
    }
    
    
    
    document.getElementsByClassName("GoogleCreativeContainerClass").remove;
    
    document.getElementsByClassName("PubAPIAd").remove;
};

//Code to run after page is loaded
window.onload = function() 
{
    mySRC.loadSettings();
    updateCSSInject();
};

editGameStats = function(vis)
{
    if(vis)
    {
        document.getElementsByClassName("widget-container game-stats-widget")[0].style.visibility = "shown";
    } else {
        document.getElementsByClassName("widget-container game-stats-widget")[0].style.visibility = "hidden";
    }
}
