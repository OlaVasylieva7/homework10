// task 1

// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval.
// Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

// let messageCount = 0;

// const intervalTimer = setInterval(() => {
//   messageCount++;
//   console.log(`message number ${messageCount}`);
  
//   if (messageCount === 5) {
//     clearInterval(intervalTimer);
//     console.log('the timer is stopped');
//   }
// }, 1000);



// task 2

// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, змінюючи їх розмір, 
// положення чи стилі через певний інтервал за допомогою setInterval.

// const circles = document.querySelectorAll('.circle');

// function colorCircles(circle) {
//     setInterval(() => {
//         circle.style.left = Math.random() * (window.innerWidth - 200) + 'px';
//         circle.style.top = Math.random() * (window.innerHeight - 200) + 'px';
        
//         const size = Math.random() * 140 + 60;
//         circle.style.width = size + 'px';
//         circle.style.height = size + 'px';
        
//         circle.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
//     }, 1000); 
// }

// circles.forEach(colorCircles);



// task 3

// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінці протягом певного інтервалу часу, використовуючи setInterval. 
// Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

// const triangles = document.querySelectorAll('.triangle');
// const scoreDisplay = document.getElementById('score');
// const gameOverDisplay = document.getElementById('game-over');
// const finalScoreDisplay = document.getElementById('final-score');

// let score = 0;

// let totalGameTime = 20 * 1000;

// function startGame() {
//     triangles.forEach(triangle => {
//         setInterval(() => {
//             const size = Math.random() * 50 + 50; 
            
//             triangle.style.borderLeftWidth = size / 2 + 'px';
//             triangle.style.borderRightWidth = size / 2 + 'px';
//             triangle.style.borderBottomWidth = size + 'px';

//             const maxLeft = window.innerWidth - size;
//             const maxTop = window.innerHeight - size * 2;

//              triangle.style.left = Math.random() * maxLeft + 'px';
//             triangle.style.top = Math.random() * maxTop + 'px';
//         }, 1000);

//         triangle.addEventListener('click', () => {
//             score++;
//             scoreDisplay.textContent = score;
//         });
//     });
    
//     setTimeout(() => {
//         endGame();
//     }, totalGameTime);
// }

// function endGame() {
//     triangles.forEach(triangle => triangle.style.display = 'none');
//     gameOverDisplay.classList.remove('hidden');
//     finalScoreDisplay.textContent = score;
// }

// startGame();



// task 4

// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури. 
// Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.

// function initializeTimer() {
//     const seconds = prompt("enter the number of seconds");

//     if (isNaN(seconds) || seconds <= 0) {
//         alert("you need to enter a valid number of seconds");
//         return;
//     }

//     function startCountdown(message, delay) {
//         window.setTimeout(() => {
//             alert(message);
//         }, delay);
//     }

//     startCountdown("timer has stopped", seconds * 1000);
// }


// initializeTimer();
