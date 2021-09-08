document.getElementById('checka').onclick = function() {compare()};
document.getElementById('checkb').onclick = function() {compare()};

function refresh() {
  document.getElementById('checka').checked = false
  document.getElementById('checkb').checked = false

  compare()
}

function comp(condition) {
  if (condition) {
    return '\u{1F7E9}' // Large Green Square
  } else {
    return '\u{1F7E5}' // Large Red Square
  }
}

function compare() {
  var checka = document.getElementById('checka').checked
  var checkb = document.getElementById('checkb').checked

  var andres = document.getElementById('andres')
  var orres = document.getElementById('orres')
  var notres = document.getElementById('notres')

  andres.innerHTML = comp(checka && checkb)
  orres.innerHTML = comp(checka || checkb)
  notres.innerHTML = comp(!checka)
}
