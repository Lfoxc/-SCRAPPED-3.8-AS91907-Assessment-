let btn = document.getElementById("getTime");

btn.addEventListener("click", Findtime);

function Findtime() {
  let time = document.getElementById("showTime");
  time.innerHTML = Date()
}
