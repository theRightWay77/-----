const rotatableImage = document.getElementById('img1');
const staticImage = document.getElementById('img2');
const compareButton = document.getElementById('button-compere');
const refreshButton = document.getElementById('button-new-capcha');


let currentRotationRotatable = getRandomRotation();
let currentRotationStatic = getRandomRotation();

rotatableImage.style.transform = `rotate(${currentRotationRotatable}deg)`;
staticImage.style.transform = `rotate(${currentRotationStatic}deg)`;

rotatableImage.addEventListener('click', () => {
    rotateImage(rotatableImage);
});

function rotateImage(image) {
    currentRotationRotatable = (currentRotationRotatable + 40) % 360;
    image.style.transform = `rotate(${currentRotationRotatable}deg)`;
    updateRotationValue();
}

function updateRotationValue() {
    rotationValueDisplay.textContent = currentRotationRotatable;
}



refreshButton.addEventListener('click', () => {
    do {
        currentRotationRotatable = getRandomRotation();
        currentRotationStatic = getRandomRotation();
    } while (currentRotationRotatable === currentRotationStatic);
    
    rotatableImage.style.transform = `rotate(${currentRotationRotatable}deg)`;
    staticImage.style.transform = `rotate(${currentRotationStatic}deg)`;
    
    updateRotationValue();
});

function getRandomRotation() {
    return Math.floor(Math.random() * 9) * 40;
}

compareButton.addEventListener('click', () => {
    if (currentRotationRotatable === currentRotationStatic) {
        alert('ПРавильно!');
    } else {
        alert('Попробуйте еще раз.');
    }
});