document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const lottoBtn = document.getElementById('generate-lotto');
  const lottoDisplay = document.getElementById('lotto-numbers');
  
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Apply initial theme
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateButtonText(currentTheme);

  themeToggle.addEventListener('click', () => {
    const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateButtonText(newTheme);
  });

  function updateButtonText(theme) {
    themeToggle.textContent = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  }

  // Lotto logic
  lottoBtn.addEventListener('click', () => {
    const numbers = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    numbers.sort((a, b) => a - b);
    
    lottoDisplay.innerHTML = '';
    numbers.forEach(num => {
      const ball = document.createElement('div');
      ball.className = 'lotto-ball';
      ball.textContent = num;
      // Vary color based on number range
      ball.style.backgroundColor = getBallColor(num);
      lottoDisplay.appendChild(ball);
    });
  });

  function getBallColor(num) {
    if (num <= 10) return '#fbc400'; // Yellow
    if (num <= 20) return '#69c8f2'; // Blue
    if (num <= 30) return '#ff7272'; // Red
    if (num <= 40) return '#aaa';    // Grey
    return '#b0d840';                // Green
  }
});
