var table = document.getElementById("table");

var count = 1;

function delete_row(e) {
  e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode);

  resetCount();
}

function edit_row(e) {
  var editName = prompt(
    "Enter updated Name",
    e.parentNode.parentNode.childNodes[1].innerText
  );

  e.parentNode.parentNode.childNodes[1].innerText = editName;
}

function insertData() {
  var name = document.getElementById("txtName");
  var tr = document.createElement("tr");
  var tdIndex = document.createElement("td");
  var tdName = document.createElement("td");
  var tdBtn = document.createElement("td");
  var btnDelete = document.createElement("img");
  var btnEdit = document.createElement("img");

  if (name.value != "") {
    var countText = document.createTextNode(count++);
    var nameText = document.createTextNode(name.value);
    var btnDeleteText = document.createTextNode("Delete");
    var btnEditText = document.createTextNode("Edit");

    btnDelete.setAttribute("onclick", "delete_row(this)");
    btnEdit.setAttribute("onclick", "edit_row(this)");

    tdIndex.appendChild(countText);
    tdName.appendChild(nameText);
    // btnDelete.appendChild(btnDeleteText);
    // btnEdit.appendChild(btnEditText);

    tr.appendChild(tdIndex);
    tr.appendChild(tdName);
    tr.appendChild(tdBtn);

    tdBtn.appendChild(btnEdit);
    tdBtn.appendChild(btnDelete);

    table.appendChild(tr);

    btnEdit.src = "icons/edit.png";
    btnDelete.src = "icons/delete.png";

    tr.className += "shadow";
    btnDelete.classList.add("ml-1");

    name.value = "";
  } else {
    alert("Task feild can't be empty");
  }
}

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

var time = document.getElementById("time");
time.innerHTML = "<strong>" + formatAMPM(new Date()) + "</strong>";

function resetCount() {
  if (table.innerHTML == "") {
    count = 1;
  }
}
