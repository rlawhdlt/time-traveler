let buttons = document.querySelectorAll('.menu-button');

for (let b = 0; b < buttons.length; b++) {
  let button = buttons[b];
  
  button.addEventListener('click', function(e) {
    let container = document.querySelector('.stars');
    
    for (let i = 0; i < 10; i++) {
      let star = document.createElement('div');
      star.classList.add('star');

      let angle = Math.random() * 2 * Math.PI;
      let distance = Math.random() * 80 + 20;
      let x = Math.cos(angle) * distance + 'px';
      let y = Math.sin(angle) * distance + 'px';

      star.style.setProperty('--x', x);
      star.style.setProperty('--y', y);

      let containerRect = container.getBoundingClientRect();
      let leftPos = e.clientX - containerRect.left;
      let topPos = e.clientY - containerRect.top;

      star.style.left = leftPos + 'px';
      star.style.top = topPos + 'px';

      container.appendChild(star);

      setTimeout(function() {
        star.remove();
      }, 700);
    }
  });
}
