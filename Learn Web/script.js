var divContent = document.getElementById("added-content");

function clickContent() {
  divContent.innerHTML = "Hallo Welt";
  setTimeout(() => {
    alert("Hello");
  }, 1500);
  
}

document.getElementById("button-content").addEventListener("click", clickContent);