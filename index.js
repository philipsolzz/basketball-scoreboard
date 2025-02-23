let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0


function increaseHomeScoreOne() {
    console.log("home + 1 clicked")
    homeScore += 1
    homeScoreEl.textContent = homeScore 
}

function increaseHomeScoreTwo() {
    console.log("home + 2 clicked")
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    console.log("home + 3 clicked")
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


/////////////////////////////////////////


let guestScoreBtnOne = document.getElementById("guest-score-btn-1")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0


function increaseGuestScoreOne() {
    console.log("guest + 1 clicked")
    guestScore += 1
    guestScoreEl.textContent = guestScore 
}

function increaseGuestScoreTwo() {
    console.log("guest + 2 clicked")
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    console.log("guest + 3 clicked")
    guestScore += 3
    guestScoreEl.textContent = guestScore
}







