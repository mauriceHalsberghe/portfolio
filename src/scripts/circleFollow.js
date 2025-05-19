function circleFollow() {
    const imageLight = document.querySelector('.project-image__light');

    if (imageLight) {
        document.addEventListener('mousemove', (e) => {

            const boundingBox = imageLight.getBoundingClientRect();
            
            const mouseX = e.clientX - boundingBox.left;
            const mouseY = e.clientY - boundingBox.top;

            const maskWidth = imageLight.offsetWidth;
            const maskHeight = imageLight.offsetHeight;

            imageLight.style.zIndex = '5';
            imageLight.style.maskPosition = `${mouseX - maskWidth / 2}px ${mouseY - maskHeight / 2}px`;
            imageLight.style.webkitMaskPosition = `${mouseX - maskWidth / 2}px ${mouseY - maskHeight / 2}px`; // For WebKit browsers
        });
    }
}

export default circleFollow;