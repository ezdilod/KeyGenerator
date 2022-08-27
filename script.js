const $ = (selector) => document.querySelector(selector);

let detailEl = $("#detail");
let keyEl = $("#keyOutput");
let keyCodeEl = $("#keyCodeOutput");
let codeEl = $("#codeOutput");

document.querySelector("body").addEventListener("keyup", (evt) => {
  let evtKeyCode = evt.keyCode;
  let evtKey = evt.key;
  let evtCode = evt.code;
  detailEl.textContent = evtKeyCode;
  keyEl.textContent = evtKey;
  keyCodeEl.textContent = evtKeyCode;
  codeEl.textContent = evtCode;
});
