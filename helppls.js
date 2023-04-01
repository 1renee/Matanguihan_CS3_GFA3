function generateRandomNumbers() {
  var num1 = Math.round(Math.random() * 20);
  var num2 = Math.round(Math.random() * 20);
  var num3 = Math.round(Math.random() * 20);
  var container = document.createElement("div");
  var num1Box = document.createElement("div");
  var num2Box = document.createElement("div");
  var num3Box = document.createElement("div");
  num1Box.innerHTML = "x: " + num1;
  num2Box.innerHTML = "y: " + num2;
  num3Box.innerHTML = "z: " + num3;
  num1Box.classList.add("random-box");
  num2Box.classList.add("random-box");
  num3Box.classList.add("random-box");
  container.appendChild(num1Box);
  container.appendChild(num2Box);
  container.appendChild(num3Box);
  document.body.insertBefore(container, document.getElementsByTagName("button")[0].nextSibling);
}
