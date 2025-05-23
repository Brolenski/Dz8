const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const selectedColor = colors[randomIndex];
    document.body.style.backgroundColor = selectedColor;
    colorSpan.textContent = selectedColor;
});

