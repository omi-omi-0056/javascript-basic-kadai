const Btn =document.getElementById('btn');

const changeText = document.getElementById('text')

Btn.addEventListener('click', () => {
  changeText.textContent = 'ボタンをクリックしました';
});