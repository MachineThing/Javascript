document.getElementById('hellobutton').onclick = function() {sayHello()};

function sayHello() {
  var div = document.getElementById('hellos');
  var hellop = document.createElement("p");
  var hello = document.createTextNode("Hello, JavaScript!");
  hellop.appendChild(hello);
  div.appendChild(hellop);
}
