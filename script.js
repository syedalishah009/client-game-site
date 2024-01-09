function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function () {
  let tenMinutes = 60 * 10,
    display = document.querySelector("#time");
  startTimer(tenMinutes, display);
};


document.getElementById('bulbButton').addEventListener('click', function() {
    var hero = document.getElementById('hero');
    var hero2 = document.getElementById('hero2');

    // Toggle the visibility of the sections
    if (hero.style.display === 'block' || hero.style.display === '') {
        hero.style.display = 'none';
        hero2.style.display = 'block';
    } else {
        hero.style.display = 'block';
        hero2.style.display = 'none';
    }
});

document.getElementById('bulbButton2').addEventListener('click', function() {
    var hero = document.getElementById('hero');
    var hero2 = document.getElementById('hero2');

    // Toggle the visibility of the sections
    if (hero.style.display === 'block' || hero.style.display === '') {
        hero.style.display = 'none';
        hero2.style.display = 'block';
    } else {
        hero.style.display = 'block';
        hero2.style.display = 'none';
    }
});

