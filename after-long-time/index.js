let timeoutId

document.getElementById("button").addEventListener('click', function() {
  const thankMessage = document.getElementById("thankMessage");
  const flowers = document.getElementById("flowers");

  const thanks = ['Спасибо за поддержку!', 'Спасибочки!', 'Ой, спасибки!', 'Спасибо за теплые слова!', 'Спасибо спасибо!']
  let randomIndex = Math.floor(Math.random() * thanks.length)
  
  if (thankMessage.textContent === thanks[randomIndex]) {
    randomIndex = (randomIndex + 1) % thanks.length;
  }
  thankMessage.textContent = thanks[randomIndex];

  flowers.style.display = 'flex'
  
  if (timeoutId) {
    clearTimeout(timeoutId)
  }
  
  timeoutId = setTimeout(() => {
    flowers.style.display = 'none'
  }, 4000)
})