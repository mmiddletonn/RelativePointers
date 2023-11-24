function generateUniqueKey() {
    return 'windowCenter_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

const uniqueKey = generateUniqueKey();

function updateCenterPosition() {
    const position = {
        x: window.innerWidth / 2 + window.screenX,
        y: window.innerHeight / 2 + window.screenY
    };
    localStorage.setItem(uniqueKey, JSON.stringify(position));
}

setInterval(updateCenterPosition, 20);

window.onbeforeunload = () => {
    localStorage.removeItem(uniqueKey);
};

function getOtherWindowsPositions() {
    let positions = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('windowCenter_') && key !== uniqueKey) {
            positions.push({ key, ...JSON.parse(localStorage.getItem(key)) });
        }
    }
    return positions;
}

function updateArrows() {
    const currentPosition = JSON.parse(localStorage.getItem(uniqueKey));
    const otherPositions = getOtherWindowsPositions();
    const container = document.getElementById('container');

    container.innerHTML = '';

    otherPositions.forEach(pos => {
        const dx = pos.x - currentPosition.x;
        const dy = pos.y - currentPosition.y;
        const angle = Math.atan2(dy, dx) * 180 / Math.PI;

        const arrow = document.createElement('img');
        arrow.src = './resources/arrow.png';
        arrow.className = 'arrow';
        arrow.style.transform = `rotate(${angle}deg)`;
        arrow.style.display = 'block';
        container.appendChild(arrow);
    });
}

setInterval(updateArrows, 1);
