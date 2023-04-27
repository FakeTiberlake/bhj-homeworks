const c = document.getElementById('timer')
const intervalId = setInterval(
  () => {
  c.textContent = Number(c.textContent) --;
  if (c <= 0) {
    clearInterval(intervalId);
alert('Вы победили в конкурсе!');
  }
    
}, 1000
) 
