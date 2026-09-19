const startButton = document.getElementById('startButton');
const timer = document.getElementById('timer');
const history = document.getElementById('history');

let seconds = 0;
let intervalId;
let moveNumber = 0;

// Bắt đầu trò chơi và chạy đồng hồ
startButton.addEventListener('click', () => {
    clearInterval(intervalId);

    seconds = 0;
    moveNumber = 0;

    timer.textContent = '00:00';
    history.innerHTML = '';
    startButton.textContent = 'Bắt đầu';
    intervalId = setInterval(() => {
        seconds += 1;

        const minutes = String(
            Math.floor(seconds / 60)
        ).padStart(2, '0');

        const remainingSeconds = String(
            seconds % 60
        ).padStart(2, '0');

        timer.textContent = `${minutes}:${remainingSeconds}`;
    }, 1000);
});

//
startButton.addEventListener('click', () => {
    clearInterval(intervalId);

    seconds = 0;
    moveNumber = 0;

    timer.textContent = '00:00';
    history.innerHTML = '';
    startButton.textContent = 'Kết Thúc';
    startButton.style.color = "white";
    startButton.style.backgroundColor = "red";
    intervalId = setInterval(() => {
        seconds += 1;

        const minutes = String(
            Math.floor(seconds / 60)
        ).padStart(2, '0');

        const remainingSeconds = String(
            seconds % 60
        ).padStart(2, '0');

        timer.textContent = `${minutes}:${remainingSeconds}`;
    }, 1000);
});

// Ghi nhận phím di chuyển
document.addEventListener('keydown', (event) => {
    const keys = {
        ArrowUp: 'Lên',
        ArrowDown: 'Xuống',
        ArrowLeft: 'Trái',
        ArrowRight: 'Phải',
        w: 'Lên',
        s: 'Xuống',
        a: 'Trái',
        d: 'Phải'
    };

    const direction =
        keys[event.key] ||
        keys[event.key.toLowerCase()];

    if (!direction || !intervalId) {
        return;
    }

    moveNumber += 1;

    const row = document.createElement('div');

    row.className =
        'grid grid-cols-3 border-b border-gray-200';

    row.innerHTML = `
        <div class="px-2 py-2">
          ${moveNumber}
        </div>

        <div class="px-2 py-2">
          ${direction}
        </div>

        <div class="px-2 py-2">
          ${timer.textContent}
        </div>
      `;

    history.appendChild(row);
});