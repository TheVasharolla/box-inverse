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
const elements = document.querySelectorAll('.scroll-fade-in');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const animationClass = entry.target.getAttribute('data-animation');
      entry.target.classList.add('animate__animated', animationClass);
      return;
    }
    entry.target.classList.remove('animate__animated', animationClass);
  });
});

elements.forEach((element) => observer.observe(element));

const counters = document.querySelectorAll('.counter');

const counterWatcher = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = parseInt(counter.getAttribute('data-target'));
      let currentCount = 0;
      const increment = Math.ceil(target / 100); // adjust this value to change the speed of the counter

      const interval = setInterval(() => {
        currentCount += increment;
        counter.textContent = currentCount;

        if (currentCount >= target) {
          clearInterval(interval);
          counter.textContent = target;
        }
      }, 20); // adjust this value to change the speed of the counter
    }
  });
}, { threshold: 1.0 });

counters.forEach((counter) => {
  counterWatcher.observe(counter);
});