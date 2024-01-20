const bodyy = document.body;
var timeout = setTimeout(closeWindow, 15000);
bodyy.addEventListener("mouseover", closeit);

setInterval(timerReset, 1000);

function closeit() {
  clearTimeout(timeout);
  timeout = setTimeout(closeWindow, 15000);
}

function closeWindow() {
  window.close();
}

function timerReset() {
  timeout = setTimeout(closeWindow, 15000);
}
