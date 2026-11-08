// Данные о сменах — можно менять под свой лагерь
const shifts = [
  {
    name: 'Сказочный терем детства',
    dates: '1 смена · июнь',
    desc: 'Волшебное путешествие со сказочными героями, квесты и театральные постановки.'
  },
  {
    name: 'Тайны Закристалья',
    dates: '2 смена · июнь–июль',
    desc: 'Ролевая игра в деревню мастеров: ремёсла, традиции и командные испытания.'
  },
  {
    name: 'За страницами календаря',
    dates: '3 смена · июль',
    desc: 'Путешествие сквозь время и культуры народов, творческие мастерские и фестивали.'
  },
  {
    name: 'Богатырские игры',
    dates: '4 смена · июль–август',
    desc: 'Сптивная смена: тренировки, соревнования и вечерние творческие выступления.'
  }
];

// Рендер карточек смен
const grid = document.getElementById('shiftsGrid');

shifts.forEach(s => {
  const card = document.createElement('div');
  card.className = 'shift-card';
  card.innerHTML = `
    <h3>${s.name}</h3>
    <div class="dates">${s.dates}</div>
    <p>${s.desc}</p>
  `;
  grid.appendChild(card);
});

// Обработка формы обратной связи
const form = document.getElementById('feedbackForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  
  if (!name || !phone) {
    alert('Пожалуйста, заполните имя и телефон.');
    return;
  }
  
  alert(`Спасибо, ${name}! Мы свяжемся с вами по номеру ${phone} в ближайшее время.`);
  form.reset();
});