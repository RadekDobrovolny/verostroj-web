var dots = document.getElementsByClassName("cell");
var letters = ["V", "R", "Š", "S", "T", "R", "J"];
var timer;

console.log("start");
console.log(dots.length);

for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("mouseover", function() {
    var dot = this;
    timer = setInterval(function() {
        var randomLetter = letters[Math.floor(Math.random() * letters.length)];
        dot.innerHTML = randomLetter;
    }, 120);
  });

  dots[i].addEventListener("mouseout", function() {
    clearInterval(timer);
    this.innerHTML = "";
  });
}

