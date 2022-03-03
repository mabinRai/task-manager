// Create a "close" button and append it to each list item
var nodeList = document.getElementsByTagName("LI");
var i;
for (i = 0; i < nodeList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  nodeList[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function addNewElement() {
  // create li
  // get value from the texbox (input field in this case)
  // create text node and add the text to the text node
  // add text node to the li element
  var li = document.createElement("li");
  var inputValue = document.getElementById("input-title").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  // check if the input value is empty
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("ul-main").appendChild(li);
  }

  // empty the text field
  document.getElementById("input-title").value = "";

  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

// clearing the li items from the list
function clearAll() {
  var list = document.querySelectorAll("li");
  var userConfirm = confirm("Are you sure you want to delete all items ?");
  console.log(userConfirm);
  if (userConfirm) {
    while (list.length > 0) {
      document.querySelector("li").remove();
    }
  } else {
    return;
  }
}
