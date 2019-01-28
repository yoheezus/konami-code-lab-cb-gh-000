const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

let index = 0;

function onKeyDownHandler(e) {
    const key = e.key;

    if (key === codes[index]) {
        index++;

        if (index === codes.length) {
            alert("Hurray!");
        }
    } else {
        index = 0;
    }
}

function init() {
  // your code here
  var body = document.body
  body.addEventListener("keydown", e => {
      console.log(e.key)
      onKeyDownHandler(e)
  });
}
