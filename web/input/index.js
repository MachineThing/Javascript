document.getElementById('greetbutton').onclick = function() {sayGreeting()};

function sayGreeting() {
  var paratag = document.getElementById('greeting')
  var fname = document.getElementById('fname').value
  var lname = document.getElementById('lname').value
  paratag.innerHTML = "Greetings, ".concat(fname, ' ', lname)
}
