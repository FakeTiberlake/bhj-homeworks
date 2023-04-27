const cookie = document.getElementById('cookie');
const counter = document.getElementById("clicker__counter");

cookie.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1;

  if (counter.textContent % 2 != 0) {
    cookie.width += 20;
    cookie.height += 20;
  } else {
    cookie.width -= 20;
    cookie.height -= 20;
  }
}

