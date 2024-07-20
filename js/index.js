document.getElementById('menu-button').onclick = function() {
  var menu = document.getElementById('mobile-menu');
  if (menu.classList.contains('max-h-0')) {
      menu.classList.remove('max-h-0');
      menu.classList.add('max-h-screen');
  } else {
      menu.classList.remove('max-h-screen');
      menu.classList.add('max-h-0');
  }
}

const marqueeInner = document.getElementById('marquee-inner');
const marqueeContent = document.getElementById('marquee-content');

// Set the width of the marquee content to the total width of all its children
marqueeContent.style.width = Array.prototype.reduce.call(marqueeContent.children, (acc, curr) => acc + curr.offsetWidth, 0) + 'px';

// Set the animation direction based on the rotation angle
if (marqueeInner.style.transform.includes('rotate(45deg)')) {
  marqueeContent.style.animationDirection = 'reverse';
} else {
  marqueeContent.style.animationDirection = 'normal';
}
