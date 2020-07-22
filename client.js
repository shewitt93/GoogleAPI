// Select the google search button
const googleSearch = document.getElementById("googleSearch");

// Select the im feeling lucky button
const imFeelingLucky = document.getElementById("imFeelingLucky");

// Add event listener to google search button
googleSearch.addEventListener("click", googleSearchFunc);

// Add event listener to im feeling lucky button
imFeelingLucky.addEventListener("click", imFeelingLuckyFunc);

function googleSearchFunc() {
    console.log("You clicked the google search button!");
};

function imFeelingLuckyFunc() {
    console.log("You clicked the im feeling lucky button!");
};