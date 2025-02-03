// Generate 200 floating kiss bubbles
function createFloatingKisses() {
    const kissesContainer = document.createElement('div');
    kissesContainer.id = 'kisses-container';
    document.body.appendChild(kissesContainer);

    for (let i = 0; i < 200; i++) {
        const kiss = document.createElement('div');
        kiss.classList.add('kiss');
        kiss.style.left = `${Math.random() * 100}vw`;  // Random position horizontally
        kiss.style.top = `${Math.random() * 100}vh`;   // Random position vertically
        kissesContainer.appendChild(kiss);
    }
}

createFloatingKisses();