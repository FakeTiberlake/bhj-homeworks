const c = document.getElementById('timer')
const intervalId = setInterval(
  () => {
  c.textContent = Number(c.textContent) -1;
  if (c.textContent <= 0) {
    clearInterval(intervalId);
alert('Вы победили в конкурсе!');
  }
    
}, 1000
) 
