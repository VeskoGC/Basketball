// HOME
let teamScore = document.getElementById('home-score');
let teamScoreValue = 0;
let increase1 = document.getElementById("home-increase1");
let increase2 = document.getElementById("home-increase2");
let increase3 = document.getElementById("home-increase3");

// GUEST
let guestScore = document.getElementById('guest-score');
let guestScoreValue = 0;
let guestIncrase1 = document.getElementById('guest-increase1')
let guestIncrase2 = document.getElementById('guest-increase2')
let guestIncrase3 = document.getElementById('guest-increase3')


// HOME SCORE // 

increase1.addEventListener('click', function(){
    teamScoreValue += 1;
    teamScore.textContent = teamScoreValue;
});

increase2.addEventListener('click', function(){
  teamScoreValue += 2;
  teamScore.textContent = teamScoreValue;
});

increase3.addEventListener('click',function(){
  teamScoreValue += 3;
  teamScore.textContent = teamScoreValue;
});


// GUEST SCORE //

guestIncrase1.addEventListener('click', function(){
  guestScoreValue += 1;
  guestScore.textContent = guestScoreValue
})

guestIncrase2.addEventListener('click', function(){
  guestScoreValue += 2;
  guestScore.textContent = guestScoreValue
})

guestIncrase3.addEventListener('click', function(){
  guestScoreValue += 3;
  guestScore.textContent = guestScoreValue
})