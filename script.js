const timeoutDuration = 60000;
let inactivityTimeout;

function resetInactivityTimer() {
  clearTimeout(inactivityTimeout);
  inactivityTimeout = setTimeout(closeWindow, timeoutDuration);
}

function closeWindow() {
  window.close();
}

document.addEventListener("mousemove", resetInactivityTimer);
document.addEventListener("keydown", resetInactivityTimer);

resetInactivityTimer();
