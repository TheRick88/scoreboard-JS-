let homeScore = document.querySelector("#home-score")
let guestScore = document.querySelector('#guest-score')

let count = 0
let countG = 0

function increaseHome ()  {
    count += 1;
    if (count > 99) {
        alert('Max score is 99')
        count = 0
        ; 
        
    }
    homeScore.textContent = (count)
    leader()
}

function increaseHome2 () {
    count += 2
    if (count > 99) {
        alert('Max score is 99')
        count = 0
        ;
        
    }
    homeScore.textContent = (count)
    leader()
}

function increaseHome3 () {
    count += 3
    if (count > 99) {
        alert('Max score is 99')
        count = 0
        
        
    }
    homeScore.textContent = (count)
    leader()
}

function increaseGuest () {
    countG += 1
    if (countG > 99) {
        alert('Max score is 99')
        countG = 0
        return;
    }
    guestScore.textContent=(countG)
    leader()
}

function increaseGuest2 () {
    countG += 2
    if (countG > 99) {
        alert('Max score is 99')
        countG = 0
        return;
    }
    guestScore.textContent=(countG)
    leader()
}

function increaseGuest3 () {
    countG += 3
    if (countG > 99) {
        alert('Max score is 99')
        countG = 0
        return;        
    }
    guestScore.textContent=(countG)
    leader()
}

// Reset button function

function reset() {
    count = 0
    countG = 0
    homeScore.textContent=(count)
    guestScore.textContent=(countG)
    homeScore.style.backgroundColor='black'
    guestScore.style.backgroundColor='black'
}

// DOM background color change for leader

function leader () {
    if (homeScore.textContent>guestScore.textContent){
        homeScore.style.backgroundColor='green'
    }  else {
        homeScore.style.backgroundColor='black'
    }
    if (guestScore.textContent>homeScore.textContent){
        guestScore.style.backgroundColor='green'
    }  else {
        guestScore.style.backgroundColor='black'
    }
}
window.addEventListener('load',function() {leader()});

