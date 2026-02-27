document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const lottoBtn = document.getElementById('generate-lotto');
  const lottoResults = document.getElementById('lotto-results');
  
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

  // Lotto logic: Generate 5 sets
  lottoBtn.addEventListener('click', () => {
    lottoResults.innerHTML = ''; // Clear previous results

    for (let i = 0; i < 5; i++) {
      const numbers = generateLottoNumbers();
      const row = document.createElement('div');
      row.className = 'numbers-row';
      
      numbers.forEach(num => {
        const ball = document.createElement('div');
        ball.className = 'lotto-ball';
        ball.textContent = num;
        ball.style.backgroundColor = getBallColor(num);
        row.appendChild(ball);
      });
      
      lottoResults.appendChild(row);
    }
  });

  function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
      const num = Math.floor(Math.random() * 45) + 1;
      if (!numbers.includes(num)) {
        numbers.push(num);
      }
    }
    return numbers.sort((a, b) => a - b);
  }

  function getBallColor(num) {
    if (num <= 10) return '#fbc400'; // Yellow
    if (num <= 20) return '#69c8f2'; // Blue
    if (num <= 30) return '#ff7272'; // Red
    if (num <= 40) return '#a4a4a4'; // Grey
    return '#b0d840';                // Green
  }
});
