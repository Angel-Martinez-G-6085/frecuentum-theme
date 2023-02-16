const contadores = document.querySelectorAll(".contador");
// const obj = document.getElementById("value");

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

function animarContadores() {
    contadores.forEach((elemento) => {
            let final = elemento.dataset.value;
            animateValue(elemento, 0, final, 500);
    })
}

const observer = new IntersectionObserver(animarContadores, {
    threshold: 0.75
})

contadores.forEach((contador) => {
    observer.observe(contador);
})

