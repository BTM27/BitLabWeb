function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
  document.getElementById("bottom").scrollIntoView({ behavior: 'smooth' });
}

// Scroll Animation
function revealElements() {
  let elements = document.querySelectorAll('.fade-in');
  elements.forEach(el => {
      let position = el.getBoundingClientRect().top;
      let screenHeight = window.innerHeight;
      if (position < screenHeight - 50) {
          el.classList.add('visible');
      }
  });
}

window.addEventListener('scroll', revealElements);
window.addEventListener('load', revealElements);