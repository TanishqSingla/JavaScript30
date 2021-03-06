window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!audio) return; //doesn't accept keypress when any other key is pressed
  audio.currentTime = 0; //rewinds the key to 0
  audio.play();

  key.classList.add("pressed");
});

const keys = document.querySelectorAll(".key");

function removeTransition(e) {
  if (e.propertyName !== "transform") return;

  this.classList.remove("pressed");
}

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
