document.getElementById('cambiarColor').addEventListener('click', function() {
    const colores = ['#f0f0f0', '#ffe4e1', '#e0ffff', '#f0fff0', '#fffacd'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    document.body.style.backgroundColor = colorAleatorio;
});