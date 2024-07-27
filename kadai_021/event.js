const Btn = document.getElementById('btn');

const addText = document.getElementById('text');

Btn.addEventListener('click', () => {
setTimeout( () => {
  addText.textContent = "ボタンをクリックしました";
},2000);
});